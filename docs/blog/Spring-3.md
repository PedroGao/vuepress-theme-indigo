# SpringBoot 学习（二）——过滤器 filter,拦截器 intercepter,切面 aspect

## 前言

SpringMvc 提高了良好的错误处理，和请求拦截和过滤。

## 使用 JavaEE 标准中的 Filter

SpringMVC 可以很好的耦合 JavaEE 的 filter，具体的实现如下

```kotlin
class TimerFilter : Filter {
    override fun destroy() {
        println("Filter被销毁:")
    }

    override fun doFilter(request: ServletRequest, response: ServletResponse, chain: FilterChain) {
        val start = Date().time
        println(request.parameterMap)
        chain.doFilter(request, response)
        println("Filter耗时: ${Date().time - start}ms")
    }

    override fun init(config: FilterConfig) {
        println("Filter初始化:")
    }
}
```

我们定义一个 Kotlin 的类然后继承 Filter 这个接口，会实现三个关于生命周期的方法 destroy，doFilter，init。简单在 doFilter 中实现一个时间的计时功能。为了使这个 TimerFilter 发挥作用，只需要简单在类上添加 Spring 的 Compoment 注解。Spring 会自动将这个自定义的 Filter 加入到运行项目中。

```kotlin
@Component
class TimerFilter : Filter
```

这个 filter 会在 spring 项目启动的时候的初始化，也就在还没有任何请求的情况下这个 filter 就已经初始化。而且它会作用在任何的请求上，但有时仅仅需要在一些请求上做 filter，因此我们可以通过配置的方法特定作用在某些请求上。首先删除掉 Component 注解。然后新建一个 Config 类 FilterConfig。

```kotlin
@Configuration
class FilterConfig : WebMvcConfigurer {

   ..............

    @Bean
    fun timeFilter(): FilterRegistrationBean<TimerFilter> {
        val registrationBean = FilterRegistrationBean<TimerFilter>()
        val timerFilter = TimerFilter()
        registrationBean.filter = timerFilter
        val urls = arrayListOf<String>()
        urls.add("/*")
        registrationBean.urlPatterns = urls
        return registrationBean
    }
}
```

如果仅仅只是需要 filter 这个配置，是不需要继承 WebMvcConfigurer 这个类的，这个类主要用于引入 spring 提供的拦截器，后续会讲到。在这个 config 类中，定义一个返回 FilterRegistrationBean 的方法，它是由 spring 提供专门用于引入自定义 filter 的类。在初始化 registrationBean 后我们可以为它加入我们自定义的 filter 和我们需要拦截的 urls 然后将这个 bean 转交给 spring 管理。

## 使用 spring 的 interceptor 拦截 url 请求

SpringMVC 为我们提供了很好用的 interceptor 来处理这些 urls 请求。创建一个自定义的 intercepter 然后继承 HandlerInterceptor 这个接口。

```kotlin
@Component
class TimerInterceptor : HandlerInterceptor {
    override fun preHandle(request: HttpServletRequest, response: HttpServletResponse, handler: Any): Boolean {
        println("拦截器 prepare")
        println((handler as HandlerMethod).bean.javaClass.name)
        println(handler.method.name)
        request.setAttribute("startTime", Date().time)
        // 返回true才会进入controller处理
        return true
    }

    override fun postHandle(request: HttpServletRequest, response: HttpServletResponse, handler: Any, modelAndView: ModelAndView?) {
        println("拦截器 post")
        val start = (request.getAttribute("startTime") as Long)
        println("拦截器耗时:${Date().time - start}ms")
    }


    override fun afterCompletion(request: HttpServletRequest, response: HttpServletResponse, handler: Any, ex: Exception?) {
        println("拦截器 post")
        val start = (request.getAttribute("startTime") as Long)
        println("拦截器耗时:${Date().time - start}ms")
        println("ex is : $ex")
    }
}
```

HandlerInterceptor 是 spring 提供的一个用于预处理 urls 的拦截器。继承这个接口必须实现 preHandle，postHandle，afterCompletion 这三个方法。

1.  preHandle：预处理 urls，返回 flase 则不会进入 controller，返回 true 则会进入 controller。
2.  postHandle： 传递 handle 给 spring，具体的时间如下：
    `Called after HandlerAdapter actually * invoked the handler, but before the DispatcherServlet renders the view.`这个方法会在 HandlerAdapter 接受这个 interceptor 之后调用，但是 DispatcherServlet 渲染视图之前被调用。
3.  afterCompletion： 处理完成这个请求后会调用这个方法。

## aop 方式处理

aop（面向切面编程）是 spring 核心的功能，能很好的无侵入性的添加功能。因此可以通过 aop 来在 urls 请求的过程中来增强。首先，配置一个切面

```kotlin
@Aspect
@Component
class TimerAspect {
    @Around(value = "execution(* com.pedro.kblog.controller.UserController.*(..))")
    fun handleControllerMethod(pjp: ProceedingJoinPoint): Any {
        println("切面开始:")
        val args = pjp.args
        args.forEach { arg -> println(arg) }
        val start = Date().time
        val any = pjp.proceed()
        println("切面耗时:${Date().time - start}ms")
        println("切面完成:")
        return any
    }
}
```

使用 Aspect 配置切面，并通过 component 注解将其交给 spring 处理。然后需要在这个类中定义一个方法，在这个方法上添加一个 Around 注解，它会让在 controller 的处理方法之前和之后来增强。来实现与 filter 和 interceptpr 同样的功能。

## 注意

这三种方式均可以实现 spring 的请求预处理和后处理，但是他们的功能有差异，初始化方法也有差异。filter 会在启动程序的时候初始化，当请求到来，interceptor 和 aop 会依次初始化，然后 aop 会先结束，然后是 interceptor 接下来是 filter。

filter -> interceptor -> aop -> aop -> interceptor -> filter
当然这三者的所做的功能也不一样。

```console
org.apache.catalina.util.ParameterMap@56edbf35
拦截器 prepare
com.pedro.kblog.controller.UserController$$EnhancerBySpringCGLIB$$8060951
getInfo
切面开始:
1
切面耗时:12ms
切面完成:
拦截器 post
拦截器耗时:529ms
拦截器 afterCompletion
拦截器耗时:530ms
ex is : null
Filter耗时: 575ms
```

filter 可以在 request 和 response 中得到参数。
interceptor 可以得到是哪个类哪个方法调用这个拦截器如有异常可以获得异常。
aop 可以得到请求参数
