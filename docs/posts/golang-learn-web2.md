---
title: Web 学习（2）——实现中间件(middleware)
date: 2018-04-29 12:15:53
tags: [golang,web]
---

使用 go 语言的 http 标准库实现中间件

<!-- more -->

## 前言

昨天我们探讨了 Go 语言使用标准库实现简单的 web 版的 HelloWorld，大致了解了 Go 实现 server 应用的流程，今天我们来探讨一下用 Go 语言实现 http 的 Middleware。

我们知道，绝大部分 web 应用会将逻辑与功能的实现写在 middleware 里面更整个结构更加分明，middleware 大致在 web 应用里面大致分为两种，即处理 response 和处理 request（个人拙见，如有错误请以指正），接下来我将以处理 request 请求的形式来实现两种 middleware 的写法。

## 第一种,以类型的形式实现

上篇博客中，我们探讨过 Go 语言实现 Web 最核心的部分：

```go
http.ListenAndServe(":8000", handler)
```

http 包里面的 ListenAndServe 函数接受两个参数，即监听地址和处理接口 handler，handler 是一个接口，我们需要实现这个接口中的唯一方法 ServeHTTP 便可以实现上述的函数，因此我们处理的整个逻辑和流程都会在这个 handler 里面，下面我们先来看一个最简单的 handler 实现。

```go
package main

import (
	"net/http"
)

func myHandler(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Hello World"))
}

func main() {
	http.ListenAndServe(":8000", http.HandlerFunc(myHandler))
}
```

上面的代码中我们定义一个 myHandler，它接受 http.ResponseWriter,\*http.Request 两个参数然后再向 ResponseWriter 中写入 Hello World,在 main 函数中，我们直接使用了 ListenAndServe 方法监听本地的 8000 端口，注意由于 Go 语言的强类型性，ListenAndServe 的第二个参数类型是 Handler，因此我们想要将 myHandler 传递给 ListenAndServe 就必须实现 ServeHTTP 这个方法。但其实 Go 源码里面已经帮我们实现了这个方法。

```go
// Handler that calls f.
type HandlerFunc func(ResponseWriter, *Request)

// ServeHTTP calls f(w, r).
func (f HandlerFunc) ServeHTTP(w ResponseWriter, r *Request) {
	f(w, r)
}
```

可以看到，Go 语言将 func(ResponseWriter, \*Request)这种类型的函数直接定义了类型 HandlerFunc，而且还实现了 ServeHTTP 这个方法，但是这个方法本身并没有实现任何逻辑，需要我们自己来实现。因此我们实现了 myHandler 这个方法，它将输出一个最简单的 HelloWorld 响应。随后我们可以用 curl 来测试一下：

```bash
$ curl localhost:8000
Hello World
```

可以看到，我们通过 curl 请求本地的 8000 端口，返回我们一个 HelloWorld。这便是一个最简单的 Handler 实现了。但是我们的目标是实现中间件，有了上述的所采用的的方法我们就可以大致明白，myHandler 应该作为最后的调用，在它之前才是中间件应该作用的地方，那么我们有了一个大致的方向，我们可以实现一个逻辑用来包含这个 myHandler，但它本身也必须实现 Handler 这个接口，因为我们要把它传递给 ListenAndServe 这个方法。好，我们先大致阐述一下这个中间件的作用，它会拦截一切请求除了这个请求的 host 是我们想要的 host，当然这个 host 有我们定义。

```go
type SingleHost struct {
	handler     http.Handler
	allowedHost string
}
```

于是我们定义了一个 SingleHost 的结构体，它里面有两个成员一个是 Handler，它将是我们上述的 myHandler，另一个是我们允许来请求 Server 的用户，这个用户他有唯一的 Host，只有当他的 Host 满足我们的要求是才让他请求成功，否则一律返回 403。

因为我们需要将这个 SingleHost 实例化并传递给 ListenAndServe 这个方法，因此它必须实现 ServeHTTP 这个方法，所以在 ServeHTTP 里面可以直接定义我们用来实现中间件的逻辑。即除非来请求的用户的 Host 是 allowedHost 否则一律返回 403。

```go
func (this *SingleHost) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	if (r.Host == this.allowedHost) {
		this.handler.ServeHTTP(w, r)
	} else {
		w.WriteHeader(403)
	}
}
```

好，可以清楚的看到只有 Request 的 Host==allowedHost 的时候，我们才调用 handler 的 ServeHTTP 方法，否则返回 403.下面是完整代码：

```go
package main

import (
	"net/http"
)

type SingleHost struct {
	handler     http.Handler
	allowedHost string
}

func (this *SingleHost) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	if (r.Host == this.allowedHost) {
		this.handler.ServeHTTP(w, r)
	} else {
		w.WriteHeader(403)
	}
}

func myHandler(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Hello World"))
}

func main() {
	single := &SingleHost{
		handler:http.HandlerFunc(myHandler),
		allowedHost:"refuse.com",
	}
	http.ListenAndServe(":8000", single)
}
```

然后我们用 curl 来请求本地的 8000 端口，

```bash
$ curl --head localhost:8000
HTTP/1.1 403 Forbidden
Date: Sun, 21 Jan 2018 08:32:47 GMT
Content-Type: text/plain; charset=utf-8
```

可以看到我们在中间件中实现了只允许 host 为 refuse.com 来访问的逻辑实现了，由于 curl 的 Host 是 localhost 所以我们的服务器直接返回了它一个 403。接下来我们改变一下 allowedHost

```bash
allowedHost:"localhost:8000",
```

我们将 allowedHost 变成为 localhost:8000，然后用 curl 测试

```bash
$ curl localhost:8000
Hello World
```

可以看到 curl 通过了中间件的并直接获得了 myHandler 返回的 HelloWorld。

## 第二种,以函数的形式实现

好，在上面我们实现了以类型为基础的中间件，可能对 Node.js 较熟悉的人都习惯以函数的形式实现中间件。首先，因为我们是以函数来实现中间件的因此这个函数返回的便是 Handler,它会接受两个参数，一个是我们定义的 myHandler，一个是 allowedHost。

```go
func SingleHost(handler http.Handler, allowedHost string) http.Handler {
	fn := func(w http.ResponseWriter, r *http.Request) {
		if r.Host == allowedHost {
			handler.ServeHTTP(w, r)
		} else {
			w.WriteHeader(403)
		}
	}
	return http.HandlerFunc(fn)
}
```

可以看到，我们在函数内部定义可一个匿名函数 fn，这个匿名函数便是我们要返回的 Handler，如果请求用户的 Host 满足 allowedHost,便可以将调用 myHandler 的函数返回，否则直接返回一个操作 403 的函数。整个代码如下：

```go
package main

import "net/http"

func SingleHost(handler http.Handler, allowedHost string) http.Handler {
	fn := func(w http.ResponseWriter, r *http.Request) {
		if r.Host == allowedHost {
			handler.ServeHTTP(w, r)
		} else {
			w.WriteHeader(403)
		}
	}
	return http.HandlerFunc(fn)
}

func myHandler(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Hello World"))
}

func main() {
	single := SingleHost(http.HandlerFunc(myHandler), "refuse.com")
	http.ListenAndServe(":8000", single)
}
```

我们还是通过 curl 来测试一下

```bash
$ curl --head localhost:8000
HTTP/1.1 403 Forbidden
Date: Sun, 21 Jan 2018 08:45:39 GMT
Content-Type: text/plain; charset=utf-8
```

可以看到由于不满足 refuse.com 的条件，我们会得到一个 403，让我们将 refuse.com 改为 localhost:8000 测试一下。

```bash
$ curl localhost:8000
Hello World
```

与刚才一样我们得到了 HelloWorld 这个正确结果。好，我们通过以函数的形式实现了上面同样的功能，当然，这两种方法都可行，主要看个人喜好了，喜欢函数式编程的我还是喜欢后者（笑）。今天就到这里了，祝掘金越办越好！！！

<post-toc>
[[toc]]
</post-toc>
