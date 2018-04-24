(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{62:function(t,s,a){"use strict";a.r(s);var n=a(0),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"自制信息检索网站（三）——go-语言标准库实现后端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自制信息检索网站（三）——go-语言标准库实现后端","aria-hidden":"true"}},[t._v("#")]),t._v(" 自制信息检索网站（三）——Go 语言标准库实现后端")]),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[t._v("#")]),t._v(" 前言")]),a("p",[t._v("前两篇博客介绍到了掘金数据的爬取和分析，而我们的最终目的是搭建一个小型的检索系统。当然数据全都是偷掘金的了（笑）。目前这个项目已经搭建完毕了，已经发布到 github 上面了"),a("a",{attrs:{href:"https://github.com/PedroGao/juejin_spider",target:"_blank",rel:"noopener noreferrer"}},[t._v("juejin")]),t._v("，另外我也之前做了一个伯乐在线的小型检索系统，地址在这"),a("a",{attrs:{href:"https://github.com/PedroGao/elasticsearch-demo",target:"_blank",rel:"noopener noreferrer"}},[t._v("demo")]),t._v("。")]),a("p",[t._v("下面就进入今天的正题，关于如何使用 Go 语言搭建一个简单的后台项目。由于在信息搜索上面使用到了 ElasticSearch 这个非常棒的开源项目，所以也使用了 Go 语言版的 elastic 实现了内容搜索，这也是这个后台项目唯一的第三方依赖，其它都为 Go 语言标准库实现的。项目结构入如下图所示：\n"),a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/1/30/16146d4576177ef1?w=150&h=337&f=jpeg&s=15454",alt:""}}),t._v("在 static 文件夹下是前端的资源部分，view 文件夹下是前端视图部分，juejin 文件夹下是后台项目的依赖，main.go 文件是整个项目的入口，接下来让我们由浅入深的看一下整个项目。")]),a("h2",{attrs:{id:"utils"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#utils","aria-hidden":"true"}},[t._v("#")]),t._v(" utils")]),a("p",[t._v("因为这个项目的场景不大单纯的只是涉及了内容检索以及资源服务，所以 utils 这里面的东西并没有太多，而由于 Go 语言的特性，它会经常涉及 error 的检查，所以整个 utils.go 里面也就只有关于 error 的处理的两个方法。")]),a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// print the error")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("ErrorPrint")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err "),a("span",{attrs:{class:"token builtin"}},[t._v("error")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("bool")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),a("span",{attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tlog"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("Println")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n\t"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("p",[t._v("第一个方法，由于在使用 elastic 查询内容时不可避免的会出现 error，可是又不能让程序 crash 掉，于是便有了这个 ErrorPrint 方法。")]),a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// fatal the error then the program will be broken")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("ErrorFatal")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err "),a("span",{attrs:{class:"token builtin"}},[t._v("error")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),a("span",{attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tlog"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("Fatal")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n\t"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("p",[t._v("第二个方法，是用于程序出现了严重错误，没有必要在继续运行下去所定义的方法，对于严重的 error 如在 http 在 ListenAndServe 时出错，便可以直接 Fatal。")]),a("h2",{attrs:{id:"log"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#log","aria-hidden":"true"}},[t._v("#")]),t._v(" log")]),a("p",[t._v("顾名思义，这个 log.go 里面实现了日志打印的功能，对于检测程序运行情况，以及查看请求的信息，一个简单的日志打印功能是十分有必要的。")]),a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("WriteLog")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("http"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Request"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" t time"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Time"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" match "),a("span",{attrs:{class:"token builtin"}},[t._v("string")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pattern "),a("span",{attrs:{class:"token builtin"}},[t._v("string")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\td "),a("span",{attrs:{class:"token operator"}},[t._v(":=")]),t._v(" time"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("Now")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("Sub")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\tl "),a("span",{attrs:{class:"token operator"}},[t._v(":=")]),t._v(" fmt"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("Sprintf")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"[ACCESS] | % -10s | % -40s | % -16s | % -10s | % -40s |"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("Bold")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token function"}},[t._v("Blue")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Method"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" r"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("URL"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Path"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" d"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("String")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("Red")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("match"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("Green")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pattern"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\tlog"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("Println")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("l"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("p",[t._v("这个函数会对请求的路径和方法，以及响应时间，匹配路径进行日志输出。至于里面的 Red(),Green(),Bold()均是为了改变在终端里面的字体颜色，让整个日志信息更为清晰。效果图如下：")]),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/1/30/16146e5f0d384ef5?w=1277&h=366&f=jpeg&s=78243",alt:""}})]),a("h2",{attrs:{id:"elastic"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#elastic","aria-hidden":"true"}},[t._v("#")]),t._v(" elastic")]),a("p",[t._v("前面也说到，整个项目会不断的涉及文章检索，内容推荐的操作，而这些便都需要使用 elasticsearch 来完成，因此笔者把所有关于与 elasticsearch 交互的功能写在了这个文件里面，其实它也很简单，只是接收请求的参数并将其结构化用来请求 elasticsearch。首先看这个 getItems 函数。")]),a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// get the article items from the elastic server")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("getItems")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("keyword "),a("span",{attrs:{class:"token builtin"}},[t._v("string")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" page "),a("span",{attrs:{class:"token builtin"}},[t._v("int")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("elastic"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SearchHits "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{attrs:{class:"token comment"}},[t._v("// search result from the tags,title,content of the article item")]),t._v("\n\tquery "),a("span",{attrs:{class:"token operator"}},[t._v(":=")]),t._v(" elastic"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("NewMultiMatchQuery")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("keyword"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"tags"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"title"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"content"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tresult"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),a("span",{attrs:{class:"token operator"}},[t._v(":=")]),t._v(" client"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("Search")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\t\t\t"),a("span",{attrs:{class:"token function"}},[t._v("Index")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"juejin"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\t\t\t"),a("span",{attrs:{class:"token function"}},[t._v("Query")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("query"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\t\t\t"),a("span",{attrs:{class:"token function"}},[t._v("From")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("page "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("10")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("Size")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("10")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\t\t\t"),a("span",{attrs:{class:"token function"}},[t._v("Do")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" ok "),a("span",{attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("ErrorPrint")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" ok "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Hits\n\t"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("nil")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("p",[t._v("这个函数接收两个参数 keyword 和 page,即关键词和页数。然后将它们写入 elasticsearch 的复合查询中，并将 hits 结果返回。实际的结果如下图：")]),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/1/30/16146ef50ecaa0a6?w=1848&h=973&f=png&s=251024",alt:""}}),t._v("\n另外还有一个 getSuggestions 函数主要用来做搜索框的提示功能，具体实现大同小异，这里边不同阐述。")]),a("h2",{attrs:{id:"router"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#router","aria-hidden":"true"}},[t._v("#")]),t._v(" router")]),a("p",[t._v("在 router.go 里面首先定义了一个结构体：")]),a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Controller "),a("span",{attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tHandleFunction "),a("span",{attrs:{class:"token keyword"}},[t._v("func")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("http"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ResponseWriter"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("http"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Request"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tMethod         "),a("span",{attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n\tPattern        "),a("span",{attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("p",[t._v("这个结构体里面有三个成员，HandleFunction 用来处理请求的响应函数，Method 用来装填请求方法，Pattern 用来匹配请求的路径，这里使用了正则匹配。")]),a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("GetItems")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("w http"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ResponseWriter"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" r "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("http"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Request"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tr"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("ParseForm")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tkeyword "),a("span",{attrs:{class:"token operator"}},[t._v(":=")]),t._v(" r"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Form"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("Get")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"keyword"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tpage_str "),a("span",{attrs:{class:"token operator"}},[t._v(":=")]),t._v(" r"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Form"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("Get")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"page"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" page_str "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('""')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{attrs:{class:"token comment"}},[t._v("// w.WriteHeader(403)")]),t._v("\n\t\tpage_str "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"1"')]),t._v("\n\t"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\tpage"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),a("span",{attrs:{class:"token operator"}},[t._v(":=")]),t._v(" strconv"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("Atoi")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("page_str"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" ok "),a("span",{attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("ErrorPrint")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" ok "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tw"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("Header")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("Set")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Content-Type"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"application/json"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\titems "),a("span",{attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("getItems")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("keyword"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" page"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" items "),a("span",{attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tdata"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),a("span",{attrs:{class:"token operator"}},[t._v(":=")]),t._v(" json"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("Marshal")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("items"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\tok "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("ErrorPrint")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t"),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" ok "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\tw"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("Write")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\tw"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("Write")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token function"}},[t._v("byte")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('""')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("p",[t._v("上面的代码是 router.go 里面的一个方法，主要用来响应网页对于文章内容的请求，效果图便是上面的效果图了。这个函数首先会调用 ParseForm 方法解析请求的参数，由于 elastic 的在 page 上不能使用空值，因此如果接受到的 page 参数为空的话会将其处理成 1，然后在 Header 里将返回的数据类型设置为 json，并且调用 elastic.go 里面的 getItems 函数，通过 json 的编组函数 Marshal 得到 json 格式的数据并返回。router.go 里面的其它方法也是如此实现的。")]),a("h2",{attrs:{id:"main"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#main","aria-hidden":"true"}},[t._v("#")]),t._v(" main")]),a("p",[t._v("由于本次使用的是 Go 语言 http.Server 这个结构体实现的服务器，因此就必须自定义一个自己的 HttpHandler 并实现 ServeHTTP 这个方法。")]),a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("type")]),t._v(" httpHandler "),a("span",{attrs:{class:"token keyword"}},[t._v("struct")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("httpHandler"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("ServeHTTP")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("w http"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ResponseWriter"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" r "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("http"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Request"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tt "),a("span",{attrs:{class:"token operator"}},[t._v(":=")]),t._v(" time"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("Now")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("_")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" controller "),a("span",{attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("range")]),t._v(" mux "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" ok"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("_")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v(":=")]),t._v(" regexp"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("MatchString")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("controller"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Pattern"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" r"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("URL"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Path"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" ok "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" r"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Method "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" controller"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Method "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\tcontroller"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("HandleFunction")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("w"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" r"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t\t"),a("span",{attrs:{class:"token keyword"}},[t._v("go")]),t._v(" juejin"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("WriteLog")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" t"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"matched"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" controller"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Pattern"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t\t"),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n\t\t\t"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("go")]),t._v(" juejin"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("WriteLog")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" t"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"unmatch"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" r"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("URL"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Path"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("p",[t._v("这个结构体会传到 Server.Handler 这个参数上，它来实现整个的路由调配。首先它会得到当前的时间 t,然后遍历 mux 这个切片。")]),a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("init")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tmux "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("append")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mux"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" juejin"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Controller"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("juejin"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("GetItems"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"GET"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"^/api/getItems"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tmux "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("append")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mux"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" juejin"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Controller"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("juejin"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("GetSuggestions"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"GET"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"^/api/getSuggestions"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tmux "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("append")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mux"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" juejin"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Controller"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Static"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"GET"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"^/static/"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tmux "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("append")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mux"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" juejin"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Controller"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("DefaultPage"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"GET"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"^/"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("p",[t._v("mux 这个切片里面存放着所有处理请求的方法。当用户请求的方法通过正则匹配到了我们的路径时便调用这个 controller 里面的方法即 controller.HandleFunction(w, r)，然后打印一条日志，如果不匹配，则打印不匹配的日志。")]),a("p",[t._v("另外 mux 里面前两个都是数据请求的处理，Static 这个方法用于处理静态文件，具体如下：")]),a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" wd"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("_")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" os"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("Getwd")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("Static")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("w http"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ResponseWriter"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" r "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("http"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Request"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tpath "),a("span",{attrs:{class:"token operator"}},[t._v(":=")]),t._v(" filepath"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("Join")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("wd"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" r"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("URL"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Path"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\thttp"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("ServeFile")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("w"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" r"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" path"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("p",[t._v("我们通过 os.Getwd 获得当前工作路径，然后通过请求的资源路径并且将这个静态资源通过 http.ServeFile 方法返回给用户这个资源。")]),a("p",[t._v("DefaultPage 这个方法用于服务于默认的请求页面。")]),a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("DefaultPage")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("w http"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ResponseWriter"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" r "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("http"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Request"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\ttmpl"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),a("span",{attrs:{class:"token operator"}},[t._v(":=")]),t._v(" template"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("ParseFiles")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("filepath"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("Join")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("wd"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"view/index.html"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),a("span",{attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tw"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("WriteHeader")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("403")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n\t"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\terr "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" tmpl"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("Execute")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("w"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("nil")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),a("span",{attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tw"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("WriteHeader")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("403")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n\t"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("p",[t._v('这个方法通过 html/template 这个默认引擎来处理我们的 index.html 页面，当用户请求时便处理这个模板，然后写入到 ResponseWriter 中。另外由于我们使用的是正则匹配，并且通过 for 循环来遍历匹配请求路径，因此必须将"^/"这个路径放在切片的最末尾，否则其它所有请求都会被它匹配，而一旦被它匹配到便会调用 DefaltPage 这个 Controller，其它的 Controller 便不会调用，整个项目也无法正常运行。好了，由于最近一直在学习 Go 语言，所以做了项目练手，但确实对路由架构这方面不熟悉，所以整个路由结构非常凌乱。如果您有什么建议，请不吝赐教。')])])}],!1,null,null,null);s.default=o.exports}}]);