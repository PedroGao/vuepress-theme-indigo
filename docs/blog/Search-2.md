# 自制信息检索网站（三）——Go 语言标准库实现后端

## 前言

前两篇博客介绍到了掘金数据的爬取和分析，而我们的最终目的是搭建一个小型的检索系统。当然数据全都是偷掘金的了（笑）。目前这个项目已经搭建完毕了，已经发布到 github 上面了[juejin](https://github.com/PedroGao/juejin_spider)，另外我也之前做了一个伯乐在线的小型检索系统，地址在这[demo](https://github.com/PedroGao/elasticsearch-demo)。

下面就进入今天的正题，关于如何使用 Go 语言搭建一个简单的后台项目。由于在信息搜索上面使用到了 ElasticSearch 这个非常棒的开源项目，所以也使用了 Go 语言版的 elastic 实现了内容搜索，这也是这个后台项目唯一的第三方依赖，其它都为 Go 语言标准库实现的。项目结构入如下图所示：
![](https://user-gold-cdn.xitu.io/2018/1/30/16146d4576177ef1?w=150&h=337&f=jpeg&s=15454)在 static 文件夹下是前端的资源部分，view 文件夹下是前端视图部分，juejin 文件夹下是后台项目的依赖，main.go 文件是整个项目的入口，接下来让我们由浅入深的看一下整个项目。

## utils

因为这个项目的场景不大单纯的只是涉及了内容检索以及资源服务，所以 utils 这里面的东西并没有太多，而由于 Go 语言的特性，它会经常涉及 error 的检查，所以整个 utils.go 里面也就只有关于 error 的处理的两个方法。

```go
// print the error
func ErrorPrint(err error) bool {
	if err != nil {
		log.Println(err)
		return false
	}
	return true
}
```

第一个方法，由于在使用 elastic 查询内容时不可避免的会出现 error，可是又不能让程序 crash 掉，于是便有了这个 ErrorPrint 方法。

```go
// fatal the error then the program will be broken
func ErrorFatal(err error) {
	if err != nil {
		log.Fatal(err)
		return
	}
}
```

第二个方法，是用于程序出现了严重错误，没有必要在继续运行下去所定义的方法，对于严重的 error 如在 http 在 ListenAndServe 时出错，便可以直接 Fatal。

## log

顾名思义，这个 log.go 里面实现了日志打印的功能，对于检测程序运行情况，以及查看请求的信息，一个简单的日志打印功能是十分有必要的。

```go
func WriteLog(r *http.Request, t time.Time, match string, pattern string) {
	d := time.Now().Sub(t)

	l := fmt.Sprintf("[ACCESS] | % -10s | % -40s | % -16s | % -10s | % -40s |", Bold(Blue(r.Method)), r.URL.Path, d.String(), Red(match), Green(pattern))

	log.Println(l)
}
```

这个函数会对请求的路径和方法，以及响应时间，匹配路径进行日志输出。至于里面的 Red(),Green(),Bold()均是为了改变在终端里面的字体颜色，让整个日志信息更为清晰。效果图如下：

![](https://user-gold-cdn.xitu.io/2018/1/30/16146e5f0d384ef5?w=1277&h=366&f=jpeg&s=78243)

## elastic

前面也说到，整个项目会不断的涉及文章检索，内容推荐的操作，而这些便都需要使用 elasticsearch 来完成，因此笔者把所有关于与 elasticsearch 交互的功能写在了这个文件里面，其实它也很简单，只是接收请求的参数并将其结构化用来请求 elasticsearch。首先看这个 getItems 函数。

```go
// get the article items from the elastic server
func getItems(keyword string, page int) *elastic.SearchHits {
	// search result from the tags,title,content of the article item
	query := elastic.NewMultiMatchQuery(keyword, "tags", "title", "content")
	result, err := client.Search().
			Index("juejin").
			Query(query).
			From((page - 1) * 10).Size(10).
			Do(ctx)
	if ok := ErrorPrint(err); ok {
		return result.Hits
	}
	return nil
}
```

这个函数接收两个参数 keyword 和 page,即关键词和页数。然后将它们写入 elasticsearch 的复合查询中，并将 hits 结果返回。实际的结果如下图：

![](https://user-gold-cdn.xitu.io/2018/1/30/16146ef50ecaa0a6?w=1848&h=973&f=png&s=251024)
另外还有一个 getSuggestions 函数主要用来做搜索框的提示功能，具体实现大同小异，这里边不同阐述。

## router

在 router.go 里面首先定义了一个结构体：

```go
type Controller struct {
	HandleFunction func(http.ResponseWriter, *http.Request)
	Method         string
	Pattern        string
}
```

这个结构体里面有三个成员，HandleFunction 用来处理请求的响应函数，Method 用来装填请求方法，Pattern 用来匹配请求的路径，这里使用了正则匹配。

```go
func GetItems(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()
	keyword := r.Form.Get("keyword")
	page_str := r.Form.Get("page")
	if page_str == "" {
		// w.WriteHeader(403)
		page_str = "1"
	}
	page, err := strconv.Atoi(page_str)
	if ok := ErrorPrint(err); ok {
		w.Header().Set("Content-Type", "application/json")
		items := getItems(keyword, page)
		if items != nil {
			data, err := json.Marshal(items)
			ok = ErrorPrint(err)
			if ok {
				w.Write(data)
			}
		}
	}
	w.Write([]byte(""))
}
```

上面的代码是 router.go 里面的一个方法，主要用来响应网页对于文章内容的请求，效果图便是上面的效果图了。这个函数首先会调用 ParseForm 方法解析请求的参数，由于 elastic 的在 page 上不能使用空值，因此如果接受到的 page 参数为空的话会将其处理成 1，然后在 Header 里将返回的数据类型设置为 json，并且调用 elastic.go 里面的 getItems 函数，通过 json 的编组函数 Marshal 得到 json 格式的数据并返回。router.go 里面的其它方法也是如此实现的。

## main

由于本次使用的是 Go 语言 http.Server 这个结构体实现的服务器，因此就必须自定义一个自己的 HttpHandler 并实现 ServeHTTP 这个方法。

```go
type httpHandler struct{}

func (*httpHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	t := time.Now()
	for _, controller := range mux {
		if ok, _ := regexp.MatchString(controller.Pattern, r.URL.Path); ok {
			if r.Method == controller.Method {
				controller.HandleFunction(w, r)
				go juejin.WriteLog(r, t, "matched", controller.Pattern)
				return
			}
		}
	}
	go juejin.WriteLog(r, t, "unmatch", r.URL.Path)
	return
}
```

这个结构体会传到 Server.Handler 这个参数上，它来实现整个的路由调配。首先它会得到当前的时间 t,然后遍历 mux 这个切片。

```go
func init() {
	mux = append(mux, juejin.Controller{juejin.GetItems, "GET", "^/api/getItems"})
	mux = append(mux, juejin.Controller{juejin.GetSuggestions, "GET", "^/api/getSuggestions"})
	mux = append(mux, juejin.Controller{Static, "GET", "^/static/"})
	mux = append(mux, juejin.Controller{DefaultPage, "GET", "^/"})
}
```

mux 这个切片里面存放着所有处理请求的方法。当用户请求的方法通过正则匹配到了我们的路径时便调用这个 controller 里面的方法即 controller.HandleFunction(w, r)，然后打印一条日志，如果不匹配，则打印不匹配的日志。

另外 mux 里面前两个都是数据请求的处理，Static 这个方法用于处理静态文件，具体如下：

```go
var wd, _ = os.Getwd()

func Static(w http.ResponseWriter, r *http.Request) {
	path := filepath.Join(wd, r.URL.Path)
	http.ServeFile(w, r, path)
}
```

我们通过 os.Getwd 获得当前工作路径，然后通过请求的资源路径并且将这个静态资源通过 http.ServeFile 方法返回给用户这个资源。

DefaultPage 这个方法用于服务于默认的请求页面。

```go
func DefaultPage(w http.ResponseWriter, r *http.Request) {
	tmpl, err := template.ParseFiles(filepath.Join(wd, "view/index.html"))
	if err != nil {
		w.WriteHeader(403)
		return
	}
	err = tmpl.Execute(w, nil)
	if err != nil {
		w.WriteHeader(403)
		return
	}
}
```

这个方法通过 html/template 这个默认引擎来处理我们的 index.html 页面，当用户请求时便处理这个模板，然后写入到 ResponseWriter 中。另外由于我们使用的是正则匹配，并且通过 for 循环来遍历匹配请求路径，因此必须将"^/"这个路径放在切片的最末尾，否则其它所有请求都会被它匹配，而一旦被它匹配到便会调用 DefaltPage 这个 Controller，其它的 Controller 便不会调用，整个项目也无法正常运行。好了，由于最近一直在学习 Go 语言，所以做了项目练手，但确实对路由架构这方面不熟悉，所以整个路由结构非常凌乱。如果您有什么建议，请不吝赐教。
