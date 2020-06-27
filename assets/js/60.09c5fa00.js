(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{308:function(t,a,n){"use strict";n.r(a);var s=n(0),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("blockquote",[n("p",[t._v("在JavaScript中call、apply、bind是Function 对象自带的三个方法，这三个方法的主要作用是改变函数中的 this 指向，从而可以达到"),n("code",[t._v("接花移木")]),t._v("的效果。")])]),t._v(" "),n("blockquote",[n("p",[t._v("call、apply、bind方法的共同点和区别：apply 、 call 、bind 三者都是用来改变函数的this对象的指向的；apply 、 call 、bind 三者第一个参数都是this要指向的对象，也就是想指定的上下文（函数的每次调用都会拥有一个特殊值——本次调用的上下文（context）——这就是this关键字的值。）；apply 、 call 、bind 三者都可以利用后续参数传参；")])]),t._v(" "),n("blockquote",[n("p",[t._v("区别：bind 是返回对应函数，便于稍后调用；apply 、call 则是立即调用 。\ncall() 、apply()可以看作是某个对象的方法，通过调用方法的形式来间接调用函数。bind() 就是将某个函数绑定到某个对象上\n一个例子：")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("//有刀没肉\nfunction peopleOne(name,name2){\n    var knife=\"西瓜刀\";\n    console.log(name,name2,\"使用\",knife,\"切\",this.meat);\n};\n//有肉，没刀\nvar peo={\n    meat:\"五花肉\"\n};\n//让peopleOne的上下文对象为peo，这样peo就可以调用peopleOne()方法使用刀去切肉了\npeopleOne.call(peo,'mrgao','mrwho'); //mrgao mrwho 使用 西瓜刀 吃 五花肉\n\npeopleOne.apply(peo,['mrgao','mrwho']); //mrgao mrwho 使用 西瓜刀 吃 五花肉\n\n")])])]),n("p",[n("strong",[t._v("call()和apply()的作用是:")])]),t._v(" "),n("blockquote",[n("p",[n("strong",[t._v("借别人的方法(刀)吃自己的肉")]),t._v("。：允许在一个对象（a）上调用该对象没有定义的方法(b)，并且这个方法(b)中可以访问该对象(a)中的属性。")])]),t._v(" "),n("blockquote",[n("p",[t._v("其中call()和apply()的不同点为：入参的方式不同，call接受多个参数，而apply接收两个参数，其中第二个参数为一个数组列表")])]),t._v(" "),n("h3",{attrs:{id:"call-apply方法第一个参数解释-借肉的人，"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#call-apply方法第一个参数解释-借肉的人，","aria-hidden":"true"}},[t._v("#")]),t._v(" call/apply方法第一个参数解释:借肉的人，")]),t._v(" "),n("blockquote",[n("p",[t._v("不传，或者传null,undefined， 函数中的 this 指向 window 对象，传递另一个函数的函数名，函数中的 this 指向这个函数的引用，传递字符串、数值或布尔类型等基础类型，函数中的 this 指向其对应的包装对象，如 String、Number、Boolean，传递一个对象，函数中的 this 指向这个对象。")])]),t._v(" "),n("h3",{attrs:{id:"call-apply的使用场景"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#call-apply的使用场景","aria-hidden":"true"}},[t._v("#")]),t._v(" call/apply的使用场景")]),t._v(" "),n("p",[t._v("1、继承")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("\nfunction Product(name, price) {\n  this.name = name;\n  this.price = price;\n}\n\nfunction Food(name, price) {\n//Food使用了Product方法，这样Product中的上下文为Food，\n//所以Food会添加name和price属性\n  Product.call(this, name, price);\n  this.category = 'food';\n}\n\nconsole.log(new Food('cheese', 5).name);\n// 结果: \"cheese\"\n\n")])])]),n("p",[t._v("2、借刀切肉/移花接木")]),t._v(" "),n("p",[t._v("参考："),n("a",{attrs:{href:"https://blog.csdn.net/zhouzuoluo/article/details/84935106",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入理解call、apply、bind（改变函数中的this指向）"),n("OutboundLink")],1)]),t._v(" "),n("blockquote",[n("p",[t._v("在javascript中有很多类数组对象；，这些对象像数组一样存储着每一个元素，但它没有操作数组的方法，而我们可以通过call 将数组的某些方法"),n("code",[t._v("移接")]),t._v("到ArrayLike 对象，从而达到操作其元素的目的")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arguments"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("     "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//输出Object ，arguments")]),t._v("\n \n         "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//检测arguments是否是Array的实例")]),t._v("\n         console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arguments "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//输出 false")]),t._v("\n         console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Array"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("isArray")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arguments"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//输出 false")]),t._v("\n \n         "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//判断arguments是否有forEach的方法")]),t._v("\n         console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arguments"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("forEach"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//输出 undefined")]),t._v("\n \n         "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//将数组中的forEach方法应用到arguments上")]),t._v("\n         "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arguments"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("item")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//输出 1 2 3 4 5")]),t._v("\n         "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n         \n         "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//因为forEach的入参为一个函数，所以第二个参数应该为一个函数")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\n")])])]),n("h3",{attrs:{id:"文章参考"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#文章参考","aria-hidden":"true"}},[t._v("#")]),t._v(" 文章参考")]),t._v(" "),n("ul",[n("li",[n("p",[n("a",{attrs:{href:"https://blog.csdn.net/zhouzuoluo/article/details/84935106",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入理解call、apply、bind（改变函数中的this指向）"),n("OutboundLink")],1)])]),t._v(" "),n("li",[n("p",[n("a",{attrs:{href:"https://blog.csdn.net/u014267183/article/details/52610600",target:"_blank",rel:"noopener noreferrer"}},[t._v("\n详解call()，apply()和bind()"),n("OutboundLink")],1)])]),t._v(" "),n("li",[n("p",[n("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方地址MDN"),n("OutboundLink")],1)])])])])}),[],!1,null,null,null);a.default=e.exports}}]);