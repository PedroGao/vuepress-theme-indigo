# SpringBoot 学习（三）Spring-data-jpa

## 前言

最近挺忙的，一直在准备复试，所以断更了好久。前面我们学习了 SpringMVC 相关的知识。今天进入 spring 另外一个子项目 spring-data-jpa 的学习。spring-data-jpa 是 spring 在 java 官方 jpa 标准上的一个子项目，主要用于快速的操作数据库。

## 起手

在 spring boot 中，spring-data-jpa 可以迅速通过 spring-boot-data-jpa-stater 快速集成。

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>
```

在 maven 中添加依赖后便可以在项目中使用了。由于是对数据库进行操作，所以必须在配置文件中添加关于数据库的配置。

```properties
spring.datasource.driver-class-name=com.mysql.jdbc.Driver
spring.datasource.url=jdbc:mysql://localhost:3306/bookshop?useUnicode=yes&characterEncoding=UTF-8&useSSL=false
spring.datasource.username=root
spring.datasource.password=123456
```

## 注解驱动

spring-data-jpa 与其他 spring 子项目一样采用注解驱动，因此用好注解便可以很好的使用 jpa 了。首先我们创建一个 Book 类。

```java
@Entity
public class Book {
    @Id
    @GeneratedValue
    private Long id;

    private String name;

    ......
}
```

这个类是一个很简单的 Java POJO 类，我们在类上添加了 Entity 注解，熟悉 hibernate 的一定很熟悉，因为 java jpa 正是由 hibernate 支持的，spring-data-jpa 默认使用的也是 hibernate。在 Book 类中，我们添加了两个属性 id,name，id 这个属性上添加了 Id,GeneratedValue 这两个注解，Id 表明这个字段是数据库表的主键，GeneratedValue 表示这个主键是自动生成。

再新建一个 Author 类了解一下其他的注解作用。

```java
@Entity
public class Author {

    @Id
    @GeneratedValue
    private Long id;

    private String name;

    @Column(columnDefinition = "INT(3)")
    private int age;

    @Temporal(TemporalType.DATE)
    private Date birthday;

    @Enumerated(EnumType.STRING)
    private Sex sex;

    @Embedded
    private Address address;

    @ElementCollection
    private List<String> hobbies;

    @ElementCollection
    private List<Address> addresses;

    @OneToMany(mappedBy = "author")
    @OrderBy("book.name ASC")
    private List<BookAuthor> books;

    @OneToOne
    private AuthorInfo info;
}
```

Column 注解表示数据库表中对应的一个字段，在注解里面可以添加其他一些约束，如 columnDefinition 表示字段的大小，还有一些其他对应数据库字段的约束。
Temporal 注解用来对日期字段进行操作，可以选择存入数据的日期是以标准日期形式，还是时间戳的形式。
Enumerated 注解表明该字段使用 Enum 枚举来定义，也可通过 EnumType 来指定枚举的类型。
ElementCollection 注解表示该字段可以对应数据库中的一个集合字段。
OrderBy 注解表示当前字段按照什么字段，什么方式排序。
Embeddable 注解表示当前类型是一个内嵌的类型。

```java
@Embeddable
public class Address {
    private String province;
    private String city;
    private String area;
    private String address;
    private String zipcode;
```

## 数据库映射方式

ManyToOne 表示多对一，在数据库表中会以外键的形式链接两个表

OneToMany 表示一对多，默认会重新创建一个表来保存这两个表之间的关系，但我们不需要这个表因此可以指定 mappedBy 来将这个掌控权交给其它字段

```java
@Entity
@Table(name = "book.category")
public class Category {

    @Id
    @GeneratedValue
    private Long id;

    @Column(length = 10, nullable = false, unique = true)
    private String name;

    @Transient
    private String xxxx;

    // 少用一对多单向关系
    @OneToMany(mappedBy = "category")
    private List<Book> books;
}
```

Table 注解来表明当前表的名字
Transient 注解表示数据库表不会创建当前的字段

## 为当前表添加前缀

```java
public class NamingStrategy extends ImplicitNamingStrategyJpaCompliantImpl {

    @Override
    protected Identifier toIdentifier(String stringForm, MetadataBuildingContext buildingContext) {
        return super.toIdentifier("rc_" + stringForm, buildingContext);
    }
}
```

自定义一个 NamingStrategy 类继承 JPA 中的 ImplicitNamingStrategyJpaCompliantImpl 类并重写它的 toIdentifier 方法，给数据库表添加 rc\_前缀。
