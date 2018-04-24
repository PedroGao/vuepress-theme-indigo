# Go 语言，Vue，Elasticsearch 打造个人博客

## 前言

好久没有写博了，最近趁放假做了一个个人的博客系统。由于没有看什么指导教程，基本上都是自己摸索，所以踩了很多坑，做的时间也很长。终于磕磕碰碰把它给搞出来了，基本有也有个博客的样子，但很多地方都比较粗糙，还需要后续的优化。下面我就来介绍一下这个博客系统。

![](https://user-gold-cdn.xitu.io/2018/2/10/1617fc3bda83d902?w=1848&h=973&f=png&s=180025)

## 首页

上面的图片便是博客系统的首页，笔者对前端 css,html 之类的一直没有系统的学习过，所以直接使用了 vue 的 UI 库 vuetify，页面最左侧是最普通的侧栏，主题是左右两个部分，左边浏览，右侧最新，最热推荐，和博客标签。具体代码就不做称述，最后会贴上 github 的地址，这里说一下应该注意的问题。由于 vue 的核心是面向组件，因此一定要**组件的复用**，如右侧的最新、最热推荐列表，基本上是除了数据不一样，其它的结构均是相同。所以完全可以用 props、emit 来达到组件的完全复用。

```vue
<template>
  <v-card>
    <v-card-title>
      <v-chip label color="primary" text-color="white">
        <v-icon left>{{ iconType }}</v-icon>
        {{ listType }}
      </v-chip>
    </v-card-title>
    <v-list :three-line="threeLine">
      <template v-for="(item, index) in items">
        <v-list-tile @click="toggle(item.id)" :key="index">
          <v-list-tile-content>
            {{ item.title }}
          </v-list-tile-content>
          <v-list-tile-action>
            <v-list-tile-action-text>{{ index + 1 }}</v-list-tile-action-text>
          </v-list-tile-action>
        </v-list-tile>
        <v-divider v-if="index + 1 < items.length" :key="index+'d'"></v-divider>
      </template>
    </v-list>
  </v-card>
</template>

<script>
export default {
  props: {
    listType: {
      type: String,
      default: ''
    },
    iconType: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default: []
    },
    threeLine: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },

  methods: {
    toggle(id) {
      // console.log(id);
      this.$router.push({ path: `article/${id}` });
    }
  }
};
</script>
```

上面的代码便是推荐列表的基本组件，可以看到几乎全是通过 props 控制数据内容以及标签的样式，在方法上，它也仅有被点击之后跳转的一个 toggle 函数。因此便可以很好的通过参数传入达到组件的复用。

## 搜索

![](https://user-gold-cdn.xitu.io/2018/2/10/1617fdd3238472bb?w=911&h=377&f=png&s=41359)
上图是这个博客系统搜索实现的效果图，这里的搜索功能是利用 elasticsearch 的 suggest 做出来的，绑定一个 v-model 来实时跟踪输入的内容然后通过 axios 请求后台得到 suggestions 实时显示。

```vue
<v-menu min-width="500" offset-y>
    <v-text-field solo clearable append-icon="search" slot="activator" v-model="query" placeholder="搜索"></v-text-field>
    <v-list v-if="suggestions.length > 0">
      <v-list-tile v-for="(item,index) in suggestions" :key="index" @click="select(item.id)">
        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
      </v-list-tile>
    </v-list>
</v-menu>
```

这里的搜索框并没有单独的写出来一个组件，而是改造 vuetify 里面的 dropmenu 组件，将 dropmenu 的 Button 替换成了 textfield 然后便可以根据输入内容，显示所搜结果。至于数据与后台的交互，我均写在了 api.js 文件里面。

```go
func GetSearchSuggestions(keyword string) ([]byte, error) {
	suggest := elastic.NewCompletionSuggester("mySuggest").
		Text(keyword).
		Field("suggest").
		Fuzziness(2).
		Size(3)
	res, err := client.Search().
		Index("blog").
		Suggester(suggest).
		Do(ctx)
	ErrorPrint(err)
	bytes, err := json.MarshalIndent(res, "", "   ")
	if err == nil {
		return bytes, nil
	}
	return []byte("null"), err
```

这段代码是 suggest 获取的后台代码，由于 elasticsearch 已经在 suggest 上面做的很好了，所以可以直接根据前段传来的 keyword 然后请求 elasticsearch，至于 elasticsearch 的使用，由于笔者在这方面也不是很熟悉，不敢过多阐述，想要了解的可以直接去官网查阅。

## 编辑

我们知道，博客系统的灵魂是编辑页面，所以我简单的通过 vue 集成了 simplemde 实现了 markdown 的编辑功能。

![](https://user-gold-cdn.xitu.io/2018/2/10/1617fee56322c769?w=1848&h=915&f=png&s=69700)
这个编辑页面左侧是编辑页面，右侧是预览页面，markdown 到 html 的转换使用了 showdown 这个第三方库，编辑结构一定程度上参考了掘金的编辑界面（笑）。

```vue
<template>
  <div id="simplemde-container">
    <textarea ref="md"></textarea>
  </div>
</template>

<script>
import '../../commnon/css/simplemde.min.css';
import Simplemde from 'simplemde';

export default {
  model: {
    prop: 'mdValue',
    event: 'input'
  },
  props: {
    mdValue: {
      type: String,
      default: '## 测试'
    }
  },
  watch: {
    mdValue(value) {
      if (value === this.simplemde.value()) return;
      this.simplemde.value(value);
    }
  },
  name: 'markdown',
  data() {
    return {
      simplemde: null
    };
  },
  mounted() {
    this.simplemde = new Simplemde({
      element: this.$refs.md,
      autoDownloadFontAwesome: true,
      autofocus: false,
      // toolbar: this.toolbar,
      spellChecker: false,
      insertTexts: {
        link: ['[', ']( )']
      },
      hideIcons: ['preview', 'side-by-side', 'fullscreen'],
      // 'guide', 'heading', 'quote', 'image',
      // placeholder: '# 标题',
      initialValue: this.mdValue
    });
    this.simplemde.codemirror.on('change', () => {
      this.$emit('input', this.simplemde.value());
    });
  },
  destroyed() {
    this.simplemde.toTextArea();
    this.simplemde = null;
  }
};
</script>
```

上面的代码便是 vue 与 simplemde 集成的基本组件，也是通过 emit 与 props 达到高度的可重用性。

## 管理

一个博客系统也不可缺少管理界面，管理面可通过登录后直接进入管理界面。

![](https://user-gold-cdn.xitu.io/2018/2/10/1617ff46b94294a1?w=1848&h=915&f=png&s=89289)
这里通过 vue-router 的判断，如果未登录则页面跳转会失败，登录则通过 cookies 来完成。管理页面其实只有一个 table 组件，目前并没有想到其他的功能，管理员可直接通过操作栏的按钮来管理当前文章，点击 link 按钮则会进入文章的详情页。

![](https://user-gold-cdn.xitu.io/2018/2/10/1617ff83545d122e?w=1848&h=973&f=png&s=153740)
![](https://user-gold-cdn.xitu.io/2018/2/10/1617ff85fe75f09e?w=1848&h=915&f=png&s=109465)
当然详情页也可通过首页的浏览直接进入，详情页会展示文章的所有内容，各种数据，以及评论，还有最左侧的操作栏可以直接点赞，编辑和评论。因为 vue 的 v-html 指令可以直接在元素中插入 html 格式的内容，因此便可以直接在一个 container 中插入刚才 showdown 转换成的 html 内容，vue 实在是太方便了。

## 后端

后端使用了 go 语言来搭建，整体上也都是 api 的请求与 elasticsearch 的交互，具体的细节请查看源代码。[blog](https://github.com/PedroGao/blog)好了，介绍完了，祝大家小年快乐。
