# Web 学习（1）——标准库 http 实现 server

## 前言

最近放假在家好好学习了一下 Go 语言，Go 作为 Google 官推的 Server 语言，因为天生的并发性和完备的标准库让 Go 语言在服务端如鱼得水。笔者在简单的学习了之后，真的是惊讶连连，好了进入正题。

首先，我们必须实现一个 Go Web 版的 Hello World。

```go
package main

import (
	"fmt"
	"net/http"
	"log"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "%s\n", "Hello World")
	})
	err := http.ListenAndServe(":8000", nil)
	if err != nil {
		log.Fatal(err)
	}
}
```

我们可以看到 Go 语言实现一个 Web HelloWorld 的简洁程度甚至直接媲美 Node.js，不需要任何容器便可以实现一个高并发的简单服务器。下面我们来分析一下这个代码：

首先，我们导入了 fmt,http 包，log 包其实对于 HelloWorld 来说并没有导入的必要，但是日志输出这个良好习惯还是得遵从。在 main()函数的第一行，我们通过 http.HandleFunc 定义了路由为"/"的响应函数，这个响应函数，接受传来的 Request，并对 Response 做一定的处理即写入 HelloWorld 然后直接返回给浏览器。然后便可以直接调用 http.ListenAndServe 来监听本地的 8000 端口，便可以直接在浏览器上看到 HelloWorld。

好，上面的流程其实很简单，有一定 Web 编程的人便都能明白，接下来我们便从 Go 的源码中看一看，这段代码究竟是如何实现的。

```go
// HandleFunc registers the handler function for the given pattern
// in the DefaultServeMux.
// The documentation for ServeMux explains how patterns are matched.
func HandleFunc(pattern string, handler func(ResponseWriter, *Request)) {
	DefaultServeMux.HandleFunc(pattern, handler)
}
```

上面这段便是 Go 源码中对 HandleFunc 函数的实现，我们可以看到这个函数直接将所有参数全部传递给了 DefaultServeMux.HandleFunc 来调用。

```go
// DefaultServeMux is the default ServeMux used by Serve.
var DefaultServeMux = &defaultServeMux

var defaultServeMux ServeMux
```

DefaultServeMux 是 http 包中的全局变量，它的原型是 ServeMux 这个结构体，我们再往上翻看这个结构体的 HandleFunc 方法。

```go
// HandleFunc registers the handler function for the given pattern.
func (mux *ServeMux) HandleFunc(pattern string, handler func(ResponseWriter, *Request)) {
	mux.Handle(pattern, HandlerFunc(handler))
}
```

我们可以看到，似乎没完没了，HandleFunc 也是直接调用这个结构体的另一个方法 Handle，另外 HandlerFunc(handler)中的 HandlerFunc 也只是一个 type 的定义。

```go
type HandlerFunc func(ResponseWriter, *Request)
```

这个函数本身并没有实现什么，需要我们自己去实现它的内容。也就是我们上面所提到的响应函数。

```go
// Handle registers the handler for the given pattern.
// If a handler already exists for pattern, Handle panics.
func (mux *ServeMux) Handle(pattern string, handler Handler)
```

终于我们找到了源头，当然这个方法的源代码还比较长，这里就不贴出全部，Handle 这个方法接受两个参数，pattern 这个 string 类型的参数表示路由，第二个参数 handle 它其实是 Handler 接口。

```go
type Handler interface {
	ServeHTTP(ResponseWriter, *Request)
}
```

可以看到 Handler 这个接口中只定义了 ServeHTTP 这一个方法，换句话说，我们也可以直接实现 ServeHTTP 这个方法来实现 Handler 这个接口，然后我们便可以传给 ServeMux 来自定义我们的 HelloWorld.

```go
package main

import (
	"fmt"
	"net/http"
	"log"
)

type CustomHandler struct{}

func (*CustomHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "%s\n", "Hello World")
}

func main() {
	mux := http.NewServeMux()
	mux.Handle("/", &CustomHandler{})
	err := http.ListenAndServe(":8000", mux)
	if err != nil {
		log.Fatal(err)
	}
}
```

上面的代码可以看到，我们定义了一个 CustomHandler,然后实现了 ServeHTTP 这个方法从而实现了 Handler 这个接口，在 main 方法中，我们通过 NewServeMux 创建了一个自己的 mux 而不去使用 http 内的默认 ServerMux。然后调用 ListenAndServe 方法，并将自己的 mux 传入，程序便会实现自定义的 HelloWorld 了。接下来我们来看一下 ListenAndServe 这个方法：

```go
// ListenAndServe always returns a non-nil error.
func ListenAndServe(addr string, handler Handler) error {
	server := &Server{Addr: addr, Handler: handler}
	return server.ListenAndServe()
}
```

源码中可以看到该方法会将传入进来的 addr 参数和 handler 送给 Server 这个结构体，从而新建一个 server 然后调用这个 server 的 ListenAndServe 方法，对于 Server 这个结构它已经是 Go 语言对于这个方面非常底层的实现了，它非常强大，而且实现了很多的方法，这里不过多阐述，主要是实力不够（笑）。好，回到正题，既然如此，我们便可以自己创建 Server 这个实例，来自定义我们的 HelloWorld 的第二版本。

```go
package main

import (
	"fmt"
	"net/http"
	"log"
	"time"
)

type CustomHandler struct{}

var mux = make(map[string]func(http.ResponseWriter, *http.Request))

func Hello(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "%s\n", "Hello World")
}

func (*CustomHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	if handler, ok := mux[r.URL.String()]; ok {
		handler(w, r)
	}
}

func main() {
	server := http.Server{
		Addr:":8000",
		Handler:&CustomHandler{},
		ReadHeaderTimeout:5 * time.Second,
	}
	mux["/"] = Hello
	err := server.ListenAndServe()
	if err != nil {
		log.Fatal(err)
	}
}
```

上面这段代码便是自创 server 的实现了，这里挑选几条新的代码说明一下，我们定义了一个 mux 的全局变量，它来装配我们的路由与相应函数的映射，相当于上面的 mux.Handle("/", .....)，这里比较简陋的直接用 Map 来实现，接下来我们定义了 Hello 这个响应函数，我们也重写了 ServeHTTP 这个方法，它会判断 request 的 url 路径与我们 mux 里面的路径是否匹配，如果匹配在从 mux 中取出相应的响应函数并将 w http.ResponseWriter, r \*http.Request 这两个参数传递给这个相应函数。

在 main 函数里，我们创建了自己的 server，通过端口号，Handler 及 timeout 时间来定义它，然后调用它的 ListenAndServe 方法，便可以实现与前面两个相同的 HelloWorld 功能。好了，今天写到这里，太晚了（笑）。
