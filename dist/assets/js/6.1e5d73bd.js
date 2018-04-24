(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{69:function(t,a,n){"use strict";n.r(a);var s=n(0),o=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"springboot-学习（三）spring-data-jpa"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#springboot-学习（三）spring-data-jpa","aria-hidden":"true"}},[t._v("#")]),t._v(" SpringBoot 学习（三）Spring-data-jpa")]),n("h2",{attrs:{id:"前言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[t._v("#")]),t._v(" 前言")]),n("p",[t._v("最近挺忙的，一直在准备复试，所以断更了好久。前面我们学习了 SpringMVC 相关的知识。今天进入 spring 另外一个子项目 spring-data-jpa 的学习。spring-data-jpa 是 spring 在 java 官方 jpa 标准上的一个子项目，主要用于快速的操作数据库。")]),n("h2",{attrs:{id:"起手"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#起手","aria-hidden":"true"}},[t._v("#")]),t._v(" 起手")]),n("p",[t._v("在 spring boot 中，spring-data-jpa 可以迅速通过 spring-boot-data-jpa-stater 快速集成。")]),n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.springframework.boot"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("spring-boot-starter-data-jpa"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),n("p",[t._v("在 maven 中添加依赖后便可以在项目中使用了。由于是对数据库进行操作，所以必须在配置文件中添加关于数据库的配置。")]),n("pre",{pre:!0,attrs:{class:"language-properties"}},[n("code",[n("span",{attrs:{class:"token attr-name"}},[t._v("spring.datasource.driver-class-name")]),n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token attr-value"}},[t._v("com.mysql.jdbc.Driver")]),t._v("\n"),n("span",{attrs:{class:"token attr-name"}},[t._v("spring.datasource.url")]),n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token attr-value"}},[t._v("jdbc:mysql://localhost:3306/bookshop?useUnicode=yes&characterEncoding=UTF-8&useSSL=false")]),t._v("\n"),n("span",{attrs:{class:"token attr-name"}},[t._v("spring.datasource.username")]),n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token attr-value"}},[t._v("root")]),t._v("\n"),n("span",{attrs:{class:"token attr-name"}},[t._v("spring.datasource.password")]),n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token attr-value"}},[t._v("123456")]),t._v("\n")])]),n("h2",{attrs:{id:"注解驱动"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#注解驱动","aria-hidden":"true"}},[t._v("#")]),t._v(" 注解驱动")]),n("p",[t._v("spring-data-jpa 与其他 spring 子项目一样采用注解驱动，因此用好注解便可以很好的使用 jpa 了。首先我们创建一个 Book 类。")]),n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Entity")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Book")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Id")]),t._v("\n    "),n("span",{attrs:{class:"token annotation punctuation"}},[t._v("@GeneratedValue")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" Long id"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" String name"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),n("p",[t._v("这个类是一个很简单的 Java POJO 类，我们在类上添加了 Entity 注解，熟悉 hibernate 的一定很熟悉，因为 java jpa 正是由 hibernate 支持的，spring-data-jpa 默认使用的也是 hibernate。在 Book 类中，我们添加了两个属性 id,name，id 这个属性上添加了 Id,GeneratedValue 这两个注解，Id 表明这个字段是数据库表的主键，GeneratedValue 表示这个主键是自动生成。")]),n("p",[t._v("再新建一个 Author 类了解一下其他的注解作用。")]),n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Entity")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Author")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),n("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Id")]),t._v("\n    "),n("span",{attrs:{class:"token annotation punctuation"}},[t._v("@GeneratedValue")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" Long id"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" String name"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Column")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("columnDefinition "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"INT(3)"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" age"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Temporal")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TemporalType"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DATE"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" Date birthday"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Enumerated")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("EnumType"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("STRING"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" Sex sex"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Embedded")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" Address address"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{attrs:{class:"token annotation punctuation"}},[t._v("@ElementCollection")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" List"),n("span",{attrs:{class:"token generics function"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("String"),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" hobbies"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{attrs:{class:"token annotation punctuation"}},[t._v("@ElementCollection")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" List"),n("span",{attrs:{class:"token generics function"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Address"),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" addresses"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{attrs:{class:"token annotation punctuation"}},[t._v("@OneToMany")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mappedBy "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"author"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token annotation punctuation"}},[t._v("@OrderBy")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"book.name ASC"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" List"),n("span",{attrs:{class:"token generics function"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("BookAuthor"),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" books"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{attrs:{class:"token annotation punctuation"}},[t._v("@OneToOne")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" AuthorInfo info"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),n("p",[t._v("Column 注解表示数据库表中对应的一个字段，在注解里面可以添加其他一些约束，如 columnDefinition 表示字段的大小，还有一些其他对应数据库字段的约束。\nTemporal 注解用来对日期字段进行操作，可以选择存入数据的日期是以标准日期形式，还是时间戳的形式。\nEnumerated 注解表明该字段使用 Enum 枚举来定义，也可通过 EnumType 来指定枚举的类型。\nElementCollection 注解表示该字段可以对应数据库中的一个集合字段。\nOrderBy 注解表示当前字段按照什么字段，什么方式排序。\nEmbeddable 注解表示当前类型是一个内嵌的类型。")]),n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Embeddable")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Address")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" String province"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" String city"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" String area"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" String address"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" String zipcode"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),n("h2",{attrs:{id:"数据库映射方式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#数据库映射方式","aria-hidden":"true"}},[t._v("#")]),t._v(" 数据库映射方式")]),n("p",[t._v("ManyToOne 表示多对一，在数据库表中会以外键的形式链接两个表")]),n("p",[t._v("OneToMany 表示一对多，默认会重新创建一个表来保存这两个表之间的关系，但我们不需要这个表因此可以指定 mappedBy 来将这个掌控权交给其它字段")]),n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Entity")]),t._v("\n"),n("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Table")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"book.category"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Category")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),n("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Id")]),t._v("\n    "),n("span",{attrs:{class:"token annotation punctuation"}},[t._v("@GeneratedValue")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" Long id"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Column")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("length "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("10")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nullable "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("false")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" unique "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("true")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" String name"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Transient")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" String xxxx"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 少用一对多单向关系")]),t._v("\n    "),n("span",{attrs:{class:"token annotation punctuation"}},[t._v("@OneToMany")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mappedBy "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"category"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" List"),n("span",{attrs:{class:"token generics function"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Book"),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" books"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),n("p",[t._v("Table 注解来表明当前表的名字\nTransient 注解表示数据库表不会创建当前的字段")]),n("h2",{attrs:{id:"为当前表添加前缀"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#为当前表添加前缀","aria-hidden":"true"}},[t._v("#")]),t._v(" 为当前表添加前缀")]),n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("NamingStrategy")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("ImplicitNamingStrategyJpaCompliantImpl")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),n("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" Identifier "),n("span",{attrs:{class:"token function"}},[t._v("toIdentifier")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String stringForm"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" MetadataBuildingContext buildingContext"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("super")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("toIdentifier")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"rc_"')]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" stringForm"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" buildingContext"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),n("p",[t._v("自定义一个 NamingStrategy 类继承 JPA 中的 ImplicitNamingStrategyJpaCompliantImpl 类并重写它的 toIdentifier 方法，给数据库表添加 rc_前缀。")])])}],!1,null,null,null);a.default=o.exports}}]);