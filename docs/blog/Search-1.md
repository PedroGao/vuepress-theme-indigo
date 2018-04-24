# 自制信息检索网站（一）——爬取掘金数据

## 前言

最近一直在掘金上浏览，写博，于是萌生了分析一下掘金的念头。于是顶着冷冰冰的键盘，硬生生的搞了个爬虫把掘金给爬了。掘金的爬取其实很好写，不需要页面解析，直接请求 ajax 数据，不需要模拟登陆，也不需要怕流量过大而被发现的问题。

下面笔者就来说一说掘金的爬虫。

## 一、结构

![](https://user-gold-cdn.xitu.io/2018/1/26/16131f49e5e23f42?w=1848&h=973&f=png&s=222632)
上图为掘金未登录的页面，可以看到掘金与知乎不一样，不登陆的状态下也是可以浏览的。对于知乎，笔者这里想要吐槽一下，知乎的内容太散了，爬了几百条发现都是某星出轨之类的，所以便放弃了。在页面的二级标题，也就是推荐、前端、Android 这样的标签就是笔者想要爬取的内容。

## 二、推荐页爬取

掘金的数据基本都是动态加载的，因此只需要模拟请求便可以拿到数据。首先 F12 来分析一下掘金请求的参数和地址：

```bash
--Response Headers
Request URL:https://recommender-api-ms.juejin.im/v1/get_recommended_entry?suid=uuBrUzMZmbmaZibarEyy&ab=welcome_3&src=web
Request Method:GET
Status Code:200 OK
Remote Address:124.42.118.246:443
Referrer Policy:no-referrer-when-downgrade

--Request Headers
Accept:*/*
Accept-Encoding:gzip, deflate, br
Accept-Language:zh-CN,zh;q=0.9
Connection:keep-alive
Host:recommender-api-ms.juejin.im
Origin:https://juejin.im
Referer:https://juejin.im/
User-Agent:Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36

--Query String Params
suid:uuBrUzMZmbmaZibarEyy
ab:welcome_3
src:web
```

通过上面参数不难发现掘金的数据请求主要在 Accept,Host,Referer 三个关键点上，因此模拟请求必须带上这三个固定的参数。对于 Query Params 这三个参数也必须带上，后面在分析其它分类时我们可以明显的看到它的不同。所以这里用 python 的 Requests 库来模拟请求的参数主要如下：

```python
api_url = 'https://recommender-api-ms.juejin.im/v1/get_recommended_entry?suid=uuBrUzMZmbmaZibarEyy&ab=welcome_3&src=web'

headers = {
    'Accept': '*/*',
    'Host': 'recommender-api-ms.juejin.im',
    'Referer': 'https://juejin.im/',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:52.0) Gecko/20100101 Firefox/52.0',
}
```

通过这样的模拟，便可以直接请求掘金在推荐栏的数据。

```python
def get_response(url):
    wb_data = requests.get(url=url, headers=headers)
    if wb_data.status_code == 200:
        return wb_data.text
    else:
        return None

if __name__ == '__main__':
    api_url = 'https://recommender-api-ms.juejin.im/v1/get_recommended_entry?suid=uuBrUzMZmbmaZibarEyy&ab=welcome_3&src=web'
    text = get_response(api_url)
```

得到的请求数据是这样的：

```json
{
      "collectionCount": 4,
      "commentsCount": 1,
      "gfw": false,
      "objectId": "590ff2322f301e0057dc9a53",
      "subscribersCount": 1,
      "ngxCachedTime": 1516963223,
      "recommenderInfo": {
        "filtered": true,
        "source": "total",
        "score": 0.42422419529517
      },
      "tags": [
        {
          "title": "腾讯",
          "ngxCached": true,
          "ngxCachedTime": 1516963189,
          "id": "55e836ff60b2fb7557a464cf"
        },
        {
          "title": "微信小程序",
          "ngxCached": true,
          "ngxCachedTime": 1516963115,
          "id": "57ea2013a22b9d006164c1f8"
        },
        {
          "title": "微信",
          "ngxCached": true,
          "ngxCachedTime": 1516963193,
          "id": "55b9036700b0cecc83240cb7"
        }
      ],
      "entryView": "5910051444d904007beed7ee",
      "rankIndex": 0.000044726535716285,
      "author": "",
      "category": {
        "ngxCached": true,
        "title": "article",
        "id": "5562b428e4b00c57d9b94b9d",
        "name": "阅读",
        "ngxCachedTime": 1516963220
      },
      "originalUrl": "https://zhuanlan.zhihu.com/p/26693839",
      "buildTime": 1516264686.3909,
      "original": false,
      "user": {
        "community": {
          "weibo": {
            "nickname": "kalasoo",
            "avatar_url": "http://tva1.sinaimg.cn/crop.0.0.512.512.180/5ef54d60jw8f0rsyzztzyj20e80e874o.jpg",
            "uid": "1593134432",
            "description": "Crazy monster! http://ming.today"
          },
          "wechat": {
            "username": "阴明 - 掘金小册",
            "avatarLarge": "http://wx.qlogo.cn/mmopen/vi_32/t0SgynmSKLflfUwaQZnXQhN4WrZIagia4iaxVg3lga4snicFbGoibNrsIjU2KHcyJbMqEdb9EXUOJnyhAuDoVpkexQ/132",
            "uid": "oDv1Ew7y6zCYA6rf-tP-nRGi7_oY"
          },
          "github": {
            "company": "XITU",
            "uid": "1555092",
            "blogAddress": "https://www.ming.today",
            "username": "kalasoo",
            "avatarLarge": "https://avatars0.githubusercontent.com/u/1555092?v=4"
          }
        },
        "collectedEntriesCount": 934,
        "company": "掘金",
        "ngxCached": true,
        "followeesCount": 381,
        "role": "admin",
        "jobTitle": "搬砖",
        "isAuthor": true,
        "postedEntriesCount": 705,
        "subscribedTagsCount": 63,
        "objectId": "551d677ee4b0cd5b623f49cb",
        "postedPostsCount": 17,
        "viewedEntriesCount": 35681,
        "username": "阴明",
        "totalCommentsCount": 1836,
        "ngxCachedTime": 1516963137,
        "totalCollectionsCount": 27391,
        "avatarLarge": "https://user-gold-cdn.xitu.io/2018/1/26/16130b27165cf9f6?w=1125&h=1125&f=png&s=669077",
        "followersCount": 37942
      },
      "type": "article",
      "screenshot": "https://user-gold-cdn.xitu.io/2017/5/8/513c549f59f3b84f888cfbbb9d9ca747",
      "lastCommentTime": "2017-05-08T16:18:40.472Z",
      "content": "腾讯官方讲解微信小程序二维码",
      "hotIndex": 294.3873,
      "title": "扫码背后藏了什么秘密？小程序码又为何长得像菊花？",
      "createdAt": "2017-05-08T04:21:06.110Z",
      "updatedAt": "2018-01-18T08:38:06.389Z",
      "english": false,
      "hot": false,
      "viewsCount": 247
    },
```

上面只是数据中的一段，掘金请求而来的数据非常完整，所以便可以直接解析送入数据库

```python
def parse(text):
    text = json.loads(text)
    if text['m'] == 'ok':
        data_list = text['d']
        for data in data_list:
            collection_count = data['collectionCount']
            comments_count = data['commentsCount']
            views_count = data['viewsCount']
            object_id = data['objectId']
            title = data['title']
            created_date = data['createdAt']
            url = 'https://juejin.im/entry/' + object_id
            tags = [tag.get('title', '') for tag in data['tags']]
            # time.sleep(1)
            content_text = requests.get(url=url, headers=content_headers)
            content = parse_content(content_text.text)

            insert_one = {
                'collection_count': collection_count,
                'url': url,
                'comments_count': comments_count,
                'views_count': views_count,
                'object_id': object_id,
                'title': title,
                'created_date': created_date,
                'tags': tags,
                'content': content
            }
            collection.insert_one(insert_one)
            print('one done')
```

这段代码中，我们可以看到笔者提取了每一项中的部分数据，然后在 url 这一块中，掘金的页面 url 其实就是 https://juejin.im/entry/ + object_id，这个 object_id 也是掘金数据里面的 object_id，因此只要将其拼凑起来便是该文章的 url。还有进入该文章的 url 之后，我们还必须获取文章的内容，因此这里有个 parse_content 函数：

```python
def parse_content(content_text):
    soup = BeautifulSoup(content_text, 'lxml')
    p_nums = [item.get_text() for item in soup.select('p')]
    return remove_tags("".join(p_nums))
```

由于掘金的请求数据与请求页面的 headers 并不相同，因此这里请求 content_text 的 content_headers 的内容如下：

```python
content_headers = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Host': 'juejin.im',
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:52.0) Gecko/20100101 Firefox/52.0'
}
```

在得到文章页面的数据后，提取该文章页面的所有 p 标签基本上就能得到整个文章的内容了，然后将所有需要的数据插入 MongoDB 中。

## 三、前端页，后端页，人工智能页爬取

整个掘金的主页除了推荐这一块的数据结构稍有不同其它的数据结构都是一样的，只不过请求的 headers 会有一些改变，但整体跟上述的爬取方式一模一样。

```python
origin_url = 'https://timeline-merger-ms.juejin.im/v1/get_entry_by_rank?src=web&before={}&limit=20&category=5562b415e4b00c57d9b94ac8'

headers = {
    'Accept': '*/*',
    'Host': 'timeline-merger-ms.juejin.im',
    'Referer': 'https://juejin.im/welcome/frontend',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:52.0) Gecko/20100101 Firefox/52.0',
}
```

注意这里的 origin_url 并没有写死，原因是掘金的 ajax 请求的参数 before 中需要一个 rankIndex 的参数，这个参数需要我们获取。但这个参数其实不难获取，在我们请求下一页的数据时，掘金会自动从当前页的最后一个数据项中的 rankIndex 拿来当做这个参数，因此我们请求下一页是，只需把当前页最后一项的 rankIndex 取出来然后加入到 origin_url 生成下一页的请求 url 即可。

```python
def parse(text):
    text = json.loads(text)
    if text['m'] == 'ok':
        data_list = text['d']['entrylist']
        rank_index = data_list[-1]['rankIndex']
        for data in data_list:
        ........................
    return rank_index

if __name__ == '__main__':
    api_url = origin_url.format(5.1561705670688)
    for _ in range(100):
        print(api_url)
        text = get_response(api_url)
        if text:
            rank_index = parse(text)
            api_url = origin_url.format(rank_index)
            time.sleep(1)
```

上面的代码中可以看到这个逻辑的实现，这里说明一下 5.1561705670688 这个参数是我手动的从掘金的某一项数据中取来的，也可以从数据中任取一个 rankIndex 来作为开头，这样这个前段项的爬虫就写好了。

后端项与人工智能其实与前段项一模一样，只不过 headers 和 origin_url 要改变一下：

```python
-- back-end
headers = {
    'Accept': '*/*',
    'Host': 'timeline-merger-ms.juejin.im',
    'Referer': 'https://juejin.im/welcome/backend',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:52.0) Gecko/20100101 Firefox/52.0',
}
origin_url = 'https://timeline-merger-ms.juejin.im/v1/get_entry_by_rank?src=web&before={}&limit=20&category=5562b419e4b00c57d9b94ae2'

-- AI
headers = {
    'Accept': '*/*',
    'Host': 'timeline-merger-ms.juejin.im',
    'Referer': 'https://juejin.im/welcome/ai',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:52.0) Gecko/20100101 Firefox/52.0',
}
origin_url = 'https://timeline-merger-ms.juejin.im/v1/get_entry_by_rank?src=web&before={}&limit=20&category=57be7c18128fe1005fa902de'
```

笔者在爬取的时候其实是三个部分一起运行的，一下子就爬了 3000 条内容。后续我们对这 3000 条数据做个分析，然后放到准备制作的信息检索网站上。整个项目的源码读者可以在这获取[juejin_spider](https://github.com/PedroGao/juejin_spider)。

另外其实这个信息检索网站，笔者已经搭建完毕了，只不过数据时从伯乐在线爬下来的

![](https://user-gold-cdn.xitu.io/2018/1/26/16132297a4b650c2?w=1848&h=973&f=png&s=267716)
后面加入上述所爬取到的掘金数据，感兴趣的可以在这里看一下[elasticsearch-demo](https://github.com/PedroGao/elasticsearch-demo)。好了，今天就到这里了，手太冷了（笑）。
