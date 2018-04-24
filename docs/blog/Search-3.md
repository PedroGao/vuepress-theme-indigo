# 自制信息检索网站（二）——分析掘金数据

## 前言

今天继续自制信息检索网站的第二步，简单的分析一下掘金的数据。在上次第一步得到数据后通过简单的数据清洗可视化来看一看掘金。

本次使用的是 jupyter notebook 用到的库有 pymongo,用来连接 MongoDB 数据库；jieba 用来进行分词；pyecharts 用来数据可视化。

## 掘金文章长度

这一部分会对所有爬取到的掘金文章的长度进行统计，首先统计所有文章的长度：

```python
# 分析文章的长度分布
all_items = collection.find({})
all_content_length = [len(item['content']) for item in all_items]
print(all_items.count())

# 输出 2996
```

然后在文章长度按照 large(>=10000 字),middle(5000-10000 字),small(1000-5000 字),x-small(0-1000 字)进行分类：

```python
content_length_distribution = {
    'large': 0,
    'middle': 0,
    'small': 0,
    'x-small': 0,
}
for item_content_length in all_content_length:
    if item_content_length >= 10000:
        content_length_distribution['large'] += 1
    elif item_content_length >= 5000 and item_content_length < 10000:
        content_length_distribution['middle'] += 1
    elif item_content_length >= 1000 and item_content_length < 5000:
        content_length_distribution['small'] += 1
    else:
        content_length_distribution['x-small'] += 1
print(content_length_distribution)

# 输出 {'small': 1707, 'middle': 440, 'large': 175, 'x-small': 674}
```

通过 echarts 绘图:

```python
from pyecharts import Pie
pie = Pie("掘金文章长度分布图", "单位为：（字）")
pie.add("字数", ["x-small", "large", "middle", "small"], [674,175,440,1707],
        is_more_utils=True)
pie
```

![](https://user-gold-cdn.xitu.io/2018/1/27/1613758284ffd4c0?w=800&h=400&f=png&s=24136)
可以看到掘金的文章大多还是以 1000-5000 位多数的。然后我们看一下在 1000-5000 各部分的文章字数分布情况。

```python
from pyecharts import Bar
# 字数在1000 - 5000 的文章字数分布
small_content_length_distribution = {
    '1000-2000': 0 ,
    '2000-3000': 0 ,
    '3000-4000': 0 ,
    '4000-5000': 0
}
for item_content_length in all_content_length:
    if item_content_length >= 1000 and item_content_length < 2000:
        small_content_length_distribution['1000-2000'] += 1
    elif item_content_length >= 2000 and item_content_length < 3000:
        small_content_length_distribution['2000-3000'] += 1
    elif item_content_length >= 3000 and item_content_length < 4000:
        small_content_length_distribution['3000-4000'] += 1
    elif item_content_length >= 4000 and item_content_length < 5000:
        small_content_length_distribution['4000-5000'] += 1
print(small_content_length_distribution)

#输出 {'3000-4000': 347, '4000-5000': 238, '2000-3000': 495, '1000-2000': 627}

bar = Bar('字数在1000 - 5000 的文章字数分布',"单位为：（字）")
labels = [label for label in small_content_length_distribution.keys()]
values = [value for value in small_content_length_distribution.values()]
# print(labels)
bar.add('字数',labels,values,is_more_utils=True)
bar
```

![](https://user-gold-cdn.xitu.io/2018/1/27/161375a795ea0d60?w=800&h=400&f=png&s=21070)
这里可以看到在 1000-5000 字数内文章的分布还是比较均匀的。

## 掘金的标签

掘金的文章大部分都自带 tags，我们来看一下这写 tags 多数有什么。

```python
# 分析所有文章的tags
all_items = collection.find({})
# 获得所有的tags
all_tags = []
for item in all_items:
    all_tags += item['tags']
print(all_tags[:20])

# 输出 ['JavaScript', '前端', '微信小程序', 'RxJS', '微信', 'JavaScript', '设计', '微信小程序', '前端', '微信', '微信小程序', '微信小程序', '前端', '微信', '微信小程序', '前端', '微信', '微信小程序', 'JavaScript', '前端']

all_tags_set = set(all_tags)
print(len(all_tags_set))
all_tags_distribution = {}
for set_item in all_tags_set:
    all_tags_distribution[set_item] = 0
# print(all_tags_distribution)
for tag_item in all_tags:
    all_tags_distribution[tag_item] += 1

from pyecharts import WordCloud

word_cloud = WordCloud('掘金文章的标签的分布','')

labels = [label for label in all_tags_distribution.keys()]
values = [value for value in all_tags_distribution.values()]

word_cloud.add('次数',labels,values)
word_cloud
```

![](https://user-gold-cdn.xitu.io/2018/1/27/161375e191a5ddc4?w=800&h=400&f=png&s=152977)
从这里可以看到 tags 还是跟近两年比较火的前端、人工智能相关。

## 掘金每年的文章数

掘金每年的文章数呈现什么样的趋势了，我们来看一下。

```python
year_list = []
for item_create_date in all_created_date:
    year_list.append(item_create_date.split('-')[0])
year_list = sorted(year_list,key=lambda x:int(x[3]))
# print(year_list)
year_set = set(year_list)
print(year_set)
all_year_distribution = {}
for set_item in year_set:
    all_year_distribution[set_item] = 0

for list_item in year_list:
    all_year_distribution[list_item] += 1
print(all_year_distribution)

from pyecharts import Line

line = Line('掘金文章年份分布图','')
labels = [label for label in all_year_distribution.keys()]
values = [value for value in all_year_distribution.values()]

line.add('文章数',['2015', '2016', '2017', '2018'],[ 4, 327, 1162, 1503],is_more_utils=True)
line
```

![](https://user-gold-cdn.xitu.io/2018/1/27/1613761387b9a0e4?w=800&h=400&f=png&s=21306)
可以看到，掘金近几年一直呈上升趋势，越来越多的人选择掘金，当然也因为笔者爬取的数据有限，所以结果仅供参考。我们再来看看去年，也就是 2017 每个月份的文章数。

```python
# 2017年每个月份的文章分布图
month_list = []
# all_created_date[:5]
for item_created_date in all_created_date:
    if item_created_date.split('-')[0] == '2017':
        month_list.append(int(item_created_date.split('-')[1]))

month_list.sort()
month_set = set(month_list)
# print(month_set)

month_distribution = {}
for set_item in month_set:
    month_distribution[set_item] = 0

for list_item in month_list:
    month_distribution[list_item] += 1
print(month_distribution)

line = Line('掘金文章2017年每月分布图','')
labels = [label for label in month_distribution.keys()]
values = [value for value in month_distribution.values()]

line.add('文章数',labels,values,is_more_utils=True)
line

#输出 {1: 60, 2: 15, 3: 17, 4: 25, 5: 41, 6: 23, 7: 29, 8: 51, 9: 64, 10: 137, 11: 200, 12: 500}
```

![](https://user-gold-cdn.xitu.io/2018/1/27/16137635ce57c0f5?w=800&h=400&f=png&s=23739)

## 掘金文章的浏览量、收藏量

我们接下来看一下那些文章是掘金里面的明星文章。首先是浏览量前 50 的文章。

```python
# 浏览量前五十
views_count_distribution = {}
for item in sort_by_views_count[:50]:
#     print(item['title'],item['views_count'])
    views_count_distribution[item['title']] = item['views_count']
print(views_count_distribution)

# {'编写自己的代码库（javascript常用实例的实现与封装）': 16254, '未来的前端工程师': 11002, '你敢在post和get上刁难我，就别怪我装逼了': 14472, '送给前端开发者的一份新年礼物': 12775, 'B站的前端之路': 17492, '2018前端值得关注的技术': 23680, '微信小游戏跳一跳外挂辅助程序': 12887, '如何优雅地使用 Git': 11595, 'AI 系统首次实现真正自主编程，完爆初级程序员': 28363, '首个微信小程序开发教程！': 125928, '面试过阿里等互联网大公司，我知道了这些套路 | 掘金技术征文': 18862, '鹿晗关晓彤公开恋情，是如何把微博服务器搞炸的？': 21196, '某小公司RESTful、共用接口、前后端分离、接口约定的实践': 11735, '这一次，彻底弄懂 JavaScript 执行机制': 24905, '打造自己的JavaScript武器库': 12927, '100+ 超全的 web 开发工具和资源': 10838, 'JavaScript专题系列20篇正式完结！': 20346, 'iView 发布后台管理系统 iview-admin，没错，它就是你想要的': 14191, '2018 我所了解的 Vue 知识大全（一）': 11840, '[译] React、Jest、Flow 和 Immutable.js 将使用 MIT 许可证': 27578, '个人总结（css3新特性）': 12321, '教你用Python来玩微信跳一跳': 22652, '2017下半年掘金日报优质文章合集：前端篇': 16820, '[译] 2017 年比较 Angular、React、Vue 三剑客 ': 15398, '个人分享--web前端学习资源分享': 19548, '如何无痛降低 if else 面条代码复杂度': 19974, '技术胖155集前端视频教程-全部免费观看': 19691, '关于IT培训机构的个人看法': 18355, 'JS维护nginx反向代理，妈妈再也不用担心我跨域了！': 10739, '能让你开发效率翻倍的 VSCode 插件配置（上）': 11849, '手摸手，带你优雅的使用 icon': 11728, 'Vue 脱坑记 - 查漏补缺(汇总下群里高频询问的xxx及给出不靠谱的解决方案)': 26215, '前端入行两年--教会了我这些道理': 12649, '反击爬虫，前端工程师的脑洞可以有多大？': 11503, '永久免费！吴恩达刚公布的深度学习课程上线网易云课堂': 15603, '2018 Web 开发者最佳学习路线': 11105, '别再拿奇技淫巧搬砖了': 17900, 'GitHub 排名前 100 的安卓、iOS 项目简介': 14091, '源码圈 365 胖友的书单整理': 67221, '妈妈再也不用担心我不会webpack了': 15861}

bar = Bar('掘金文章浏览量前50分布图','')
labels = [label for label in views_count_distribution.keys()]
values = [value for value in views_count_distribution.values()]

bar.add('浏览数',labels,values,is_more_utils=True)
bar
```

![](https://user-gold-cdn.xitu.io/2018/1/27/16137662557c4694?w=800&h=400&f=png&s=21901)
由于 title 过于长所以这里显示不是很好，有兴趣的可以去 github 上面下载这个 notebook 看一下。再来看一下收藏量：

```python
# 收藏量前五十
sort_by_collection_count = collection.find().sort('collection_count',pymongo.DESCENDING)

collection_count_distribution = {}
for item in sort_by_collection_count[:50]:
#     print(item['title'],item['views_count'])
    collection_count_distribution[item['title']] = item['collection_count']
# print(collection_count_distribution)

bar = Bar('掘金文章收藏量前50分布图','')
labels = [label for label in collection_count_distribution.keys()]
values = [value for value in collection_count_distribution.values()]

bar.add('收藏数',labels,values,is_more_utils=True)
bar
```

![](https://user-gold-cdn.xitu.io/2018/1/27/1613767fde35bab4?w=800&h=400&f=png&s=24872)
下面是评论量：

```python
# 评论量前五十
sort_by_comments_count = collection.find().sort('comments_count',pymongo.DESCENDING)

comments_count_distribution = {}
for item in sort_by_comments_count[:50]:
#     print(item['title'],item['views_count'])
    comments_count_distribution[item['title']] = item['comments_count']
# print(collection_count_distribution)

bar = Bar('掘金文章评论量前50分布图','')
labels = [label for label in comments_count_distribution.keys()]
values = [value for value in comments_count_distribution.values()]

bar.add('评论数',labels,values,is_more_utils=True)
bar
```

![](https://user-gold-cdn.xitu.io/2018/1/27/1613768abe72551a?w=800&h=400&f=png&s=25020)

## 掘金的标题和内容

下面我们来通过分词来看一下掘金的标题和内容大致都说了些什么。首先是标题：

```python
all_tokens_set = set(all_tokens_list)
# print(all_tokens_set)
all_tokens_distribution = {}
for set_item in all_tokens_set:
    all_tokens_distribution[set_item] = 0
# print(all_tags_distribution)
for token_item in all_tokens_list:
    all_tokens_distribution[token_item] += 1
# print(all_tokens_distribution)

from pyecharts import WordCloud
word_cloud = WordCloud('掘金文章标题分布','')

labels = [label for label in all_tokens_distribution.keys()]
values = [value for value in all_tokens_distribution.values()]

word_cloud.add('次数',labels,values)
word_clou
```

![](https://user-gold-cdn.xitu.io/2018/1/27/161376abfb4d5428?w=800&h=400&f=png&s=164226)
接下来是内容：

```python
# 分析文章内容
all_content = [item['content'] for item in collection.find({})]

content_tokens_list = []

for line in all_content:
    cuts = jieba.cut(line,cut_all=False)
    for cut in cuts:
        if cut not in add_punc:
            content_tokens_list.append(cut)

print(len(content_tokens_list))
# 输出 4806605
content_tokens_set = set(content_tokens_list)
print(len(content_tokens_set))
# 输出 80081
content_tokens_distribution = {}
for set_item in content_tokens_set:
    content_tokens_distribution[set_item] = 0
# print(all_tags_distribution)
for token_item in content_tokens_list:
    content_tokens_distribution[token_item] += 1

new_content_tokens_distribution = sorted(content_tokens_distribution.items(),key=lambda x:x[1])
# print(content_tokens_distribution.items())
word_cloud_data = new_content_tokens_distribution[-800:-150]

word_cloud = WordCloud('掘金文章内容分布','')

labels = [label[0] for label in word_cloud_data]
values = [value[1] for value in word_cloud_data]

word_cloud.add('次数',labels,values)
word_cloud
```

![](https://user-gold-cdn.xitu.io/2018/1/27/161376c95a0425b9?w=800&h=400&f=png&s=113627)
这里由于掘金的内容词太多了，而且前面很大一部分都是停用词，几乎没有意义，所以截取了一部分展示，其实效果也不好。最后因为爬取的数据有限，所以所有结果仅供参看，并无任何实际意义。项目的源代码在这里[juejin_spider](https://github.com/PedroGao/juejin_spider).
