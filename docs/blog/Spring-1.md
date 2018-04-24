# SpringBoot 学习（一）起手式与 RestController

## 前言

原来一直有断断续续的有了解过 SpringBoot，可是因为很多原因一直没有系统的学习过，所以希望这次博客连载的方式监督自己。好，进入主题。

## 开始一个项目

SpringBoot 自推出以来因其零配置特性吸粉无数，可以直接通过 spring initialize 开始一个项目。也可通过 Maven 项目导入 starters，如 starter-web 便可以开始一个简单的 web 项目，当然也必须导入必不可少的 starter-test。

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-test</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>
```

这样便已经搭建好了一个简单的 SpringBoot 项目。

## 运行一个项目

SpringBoot 项目需要一个 Application 类作为入口，这个类需要 SpringBootApplication 这个注释来告诉 Spring 程序从这里开始。

```java
@SpringBootApplication
public class DemoApplication {
    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }
}
```

1.  添加一个 RestController,测试一个 Restful 的返回值。
2.  添加 GetMapping，接受任何类型的 Restful 的请求方法，并返回一个简单的字符串。

```java
@SpringBootApplication
@RestController
public class DemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }

    @GetMapping("/hello")
    public String hello() {
        return "Hello Spring Security";
    }
}
```

## 添加一个 Controller

1.  新建一个 User 类

```java
public class User {
    private String username;
    private String password;
    ···setter and getter
}
```

2.  新建一个 UserController

```java
@RestController
public class UserController {

    @RequestMapping(value = "/user", method = RequestMethod.GET)
    public List<User> query(UserQueryCondition condition,
                            @PageableDefault(page = 0, size = 10, sort = "username",
                                    direction = Sort.Direction.DESC) Pageable pageable) {
        System.out.println(condition);
        System.out.println(pageable);
        List<User> users = new ArrayList<>();
        users.add(new User());
        users.add(new User());
        users.add(new User());
        return users;
    }
}
```

RequestMapping 可以指定路径值，即 value，也可从 path 指定，两者是一回事。请求参数指定 RequestParam 注解用作单个参数接收，也可以通过对象接收如 UserQueryCondition 接收对象内的属性的参数。使用 spring data 内置 Pageable 对象接收分页参数。通过 PageableDefault 使用默认的参数值。
sort 可以指定 sort 的对象以及方法 方法有 DESC 和 ASC 两种方向。当然 sort 也可以不指定方向，在 direction 中指定上述的两种方向。

## 测试

1.  测试类必须有 RunWith,SpringBootTest 两个注解

```java
@RunWith(SpringRunner.class)
@SpringBootTest
```

2.  Web 应用好用的几个测试类

```java
 @Autowired
    private WebApplicationContext wac;

    private MockMvc mockMvc;

@Before
    public void setup() {
        mockMvc = MockMvcBuilders.webAppContextSetup(wac).build();
    }
```

通过测试的 Before 注解的方法，初始化 mockMvc

3.  小技巧

静态的引入经常要使用的静态方法，如

```java
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
```

方便在后面的测试中直接使用

4.  perform，andExpect 测试

perform 开始一个模拟请求
andExpect 指定返回数据的状态码，内容常用的有 status 指定状态码
jsonPath 来分析返回的内容

5.  get，param，contentType 来指定模拟请求的参数，路径和 content-type
