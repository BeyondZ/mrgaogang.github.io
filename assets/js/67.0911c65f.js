(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{244:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("blockquote",[s("p",[t._v("简介：Android开发使用PupopWindow在指定View的上下左右动态显示菜单列表，模仿IOS底部弹窗列表。")])]),t._v(" "),s("hr"),t._v(" "),s("p",[s("strong",[t._v("欢迎大家Star😯")]),t._v(" "),s("br"),t._v(" "),s("a",{attrs:{href:"https://github.com/MrGaoGang/luckly_popup_window",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github地址"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("PupopWindow动态获取显示的位置，并添加指示箭头\n"),s("br"),t._v("\n效果图"),s("br"),t._v(" "),s("img",{attrs:{src:"/images/popup/image.gif",alt:""}}),t._v(" "),s("img",{attrs:{src:"/images/popup/showbottom.png",alt:""}})]),t._v(" "),s("p",[s("strong",[t._v("目录")]),t._v(":")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#1%E6%B7%BB%E5%8A%A0%E6%95%B0%E6%8D%AEbr"}},[t._v("1、添加数据"),s("br")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#2%E8%AE%BE%E7%BD%AElucklypopupwindow%E7%9A%84%E5%AE%BD%E5%BA%A6%E5%BF%85%E9%A1%BB%E8%AE%BE%E7%BD%AEbr"}},[t._v("2、设置LucklyPopupWindow的宽度（必须设置）"),s("br")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#3%E7%BB%99%E6%AF%8F%E4%B8%80%E4%B8%AAitem%E6%B7%BB%E5%8A%A0%E5%88%86%E5%89%B2%E7%BA%BFbr"}},[t._v("3、给每一个Item添加分割线"),s("br")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#4%E8%AE%BE%E7%BD%AE%E8%83%8C%E6%99%AF%E9%A2%9C%E8%89%B2br"}},[t._v("4、设置背景颜色"),s("br")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#5%E8%AE%BE%E7%BD%AEpopupwindow%E6%98%BE%E7%A4%BA%E6%97%B6activity%E5%85%B6%E4%BD%99%E9%83%A8%E5%88%86%E6%98%BE%E7%A4%BA%E7%81%B0%E8%89%B2%E7%A8%8B%E5%BA%A6br"}},[t._v("5、设置PopupWindow显示时Activity其余部分显示灰色程度"),s("br")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#6%E8%AE%BE%E7%BD%AE%E5%AD%97%E4%BD%93%E7%9A%84%E9%A2%9C%E8%89%B2%E5%92%8C%E5%A4%A7%E5%B0%8Fbr"}},[t._v("6、设置字体的颜色和大小"),s("br")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#7%E8%AE%BE%E7%BD%AE%E5%9B%BE%E7%89%87%E4%B8%8D%E6%98%BE%E7%A4%BA%E4%BB%A5%E5%8F%8A%E8%AE%BE%E7%BD%AE%E5%9B%BE%E7%89%87%E5%A4%A7%E5%B0%8Fbr"}},[t._v("7、设置图片不显示以及设置图片大小"),s("br")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#8%E6%B7%BB%E5%8A%A0%E7%9B%91%E5%90%AC%E4%BA%8B%E4%BB%B6br"}},[t._v("8、添加监听事件"),s("br")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#9%E8%AE%BE%E7%BD%AE%E7%AE%AD%E5%A4%B4%E7%9A%84%E5%AE%BD%E9%AB%98%E5%9C%86%E8%A7%92%E7%9F%A9%E5%BD%A2%E7%9A%84%E5%8D%8A%E5%BE%84br"}},[t._v("9、设置箭头的宽,高,圆角矩形的半径"),s("br")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#10%E5%9C%A8%E6%9F%90%E4%B8%AAview%E4%B8%8B%E4%B8%8A%E6%98%BE%E7%A4%BA%E8%87%AA%E5%8A%A8%E5%88%A4%E6%96%AD%E4%B8%8A%E4%B8%8Bbr"}},[t._v("10、在某个View下/上显示（自动判断上下）"),s("br")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#11%E6%A8%A1%E4%BB%BFios%E5%BA%95%E9%83%A8%E5%BC%B9%E7%AA%97"}},[t._v("11、模仿ios底部弹窗")])])]),t._v(" "),s("h2",{attrs:{id:"引用包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引用包","aria-hidden":"true"}},[t._v("#")]),t._v(" 引用包 "),s("a",{attrs:{href:"https://jitpack.io/#mrgaogang/luckly_popup_window",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://jitpack.io/v/mrgaogang/luckly_popup_window.svg",alt:""}}),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("Step 1.在根 build.gradle中添加如下依赖"),s("br")]),t._v(" "),s("div",{staticClass:"language-Java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("\tallprojects "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\trepositories "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\t\t\tmaven "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" url "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://jitpack.io'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Step 2. 在build.gradle中添加如下依赖"),s("br")]),t._v(" "),s("div",{staticClass:"language-Java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v(" dependencies "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t        compile "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'com.github.mrgaogang:luckly_popup_window:v1.4.1'")]),t._v("\n\t "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h1",{attrs:{id:"常用的方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用的方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 常用的方法")]),t._v(" "),s("h3",{attrs:{id:"_1、添加数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、添加数据","aria-hidden":"true"}},[t._v("#")]),t._v(" 1、添加数据"),s("br")]),t._v(" "),s("p",[t._v("添加数据的时候，内容和图片的个数应该相同；如果不需要添加图片的话，那么使用第一个和第四个方法，传递的Bitmap=null即可。")]),t._v(" "),s("div",{staticClass:"language-Java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DataBeans")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" strings"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" images"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Bitmap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" images"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DataBeans")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" list"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"_2、设置lucklypopupwindow的宽度（必须设置）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、设置lucklypopupwindow的宽度（必须设置）","aria-hidden":"true"}},[t._v("#")]),t._v(" 2、设置LucklyPopupWindow的宽度（必须设置）"),s("br")]),t._v(" "),s("p",[t._v("LucklyPopupWindow的宽度（必须设置);设置的单位是dp。")]),t._v(" "),s("div",{staticClass:"language-Java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setWidth")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" widthDp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"_3、给每一个item添加分割线"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、给每一个item添加分割线","aria-hidden":"true"}},[t._v("#")]),t._v(" 3、给每一个Item添加分割线"),s("br")]),t._v(" "),s("p",[t._v("默认的情况是没有分割线的。需要调用以下方法。")]),t._v(" "),s("div",{staticClass:"language-Java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//可以自己添加RecyclerView的分割线")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addItemDecoration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RecyclerView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ItemDecoration")]),t._v(" itemDecoration"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//使用内部封装好了的分割线，传入的参数分别是：方向，颜色，分割线的宽")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addItemDecoration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" oritation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" lineHeight"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"_4、设置背景颜色"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、设置背景颜色","aria-hidden":"true"}},[t._v("#")]),t._v(" 4、设置背景颜色"),s("br")]),t._v(" "),s("p",[t._v("也就是设置三角形和矩形框的背景颜色")]),t._v(" "),s("div",{staticClass:"language-Java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("     "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setBackgroundColor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" backgroundColor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"_5、设置popupwindow显示时activity其余部分显示灰色程度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5、设置popupwindow显示时activity其余部分显示灰色程度","aria-hidden":"true"}},[t._v("#")]),t._v(" 5、设置PopupWindow显示时Activity其余部分显示灰色程度"),s("br")]),t._v(" "),s("p",[t._v("取值范围0.0<=darkBackgroundDegree<=1.0f")]),t._v(" "),s("div",{staticClass:"language-Java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("     "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setDarkBackgroundDegree")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" darkBackgroundDegree"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"_6、设置字体的颜色和大小"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6、设置字体的颜色和大小","aria-hidden":"true"}},[t._v("#")]),t._v(" 6、设置字体的颜色和大小"),s("br")]),t._v(" "),s("div",{staticClass:"language-Java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("     "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTextColor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" textColor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTextSize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" textSize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("；\n")])])]),s("h3",{attrs:{id:"_7、设置图片不显示以及设置图片大小"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7、设置图片不显示以及设置图片大小","aria-hidden":"true"}},[t._v("#")]),t._v(" 7、设置图片不显示以及设置图片大小"),s("br")]),t._v(" "),s("div",{staticClass:"language-Java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("     "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setImageDisable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" imageDisable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setImageSize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" widthDp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" heightDp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"_8、添加监听事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8、添加监听事件","aria-hidden":"true"}},[t._v("#")]),t._v(" 8、添加监听事件"),s("br")]),t._v(" "),s("div",{staticClass:"language-Java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setOnItemClickListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LucklyPopopWindow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OnItemClickListener")]),t._v(" onItemClickListener"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"_9、设置箭头的宽-高-圆角矩形的半径"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9、设置箭头的宽-高-圆角矩形的半径","aria-hidden":"true"}},[t._v("#")]),t._v(" 9、设置箭头的宽,高,圆角矩形的半径"),s("br")]),t._v(" "),s("div",{staticClass:"language-Java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTriangleWidth")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" triangleWidth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTrianleHeight")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" trianleHeight"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setRadius")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" radius"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"_10、在某个view下-上显示（自动判断上下）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_10、在某个view下-上显示（自动判断上下）","aria-hidden":"true"}},[t._v("#")]),t._v(" 10、在某个View下/上显示（自动判断上下）"),s("br")]),t._v(" "),s("p",[t._v("注意：这个方法必须最后调用。")]),t._v(" "),s("div",{staticClass:"language-Java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("showAtLocation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("View")]),t._v(" parentView"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("View")]),t._v(" positionView"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"_11、模仿ios底部弹窗"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_11、模仿ios底部弹窗","aria-hidden":"true"}},[t._v("#")]),t._v(" 11、模仿ios底部弹窗")]),t._v(" "),s("div",{staticClass:"language-Java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("\tmLucklyPopopWindow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("showInBottom")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getWindow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDecorView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h1",{attrs:{id:"lucklypopouwindow的使用方法。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lucklypopouwindow的使用方法。","aria-hidden":"true"}},[t._v("#")]),t._v(" LucklyPopouWindow的使用方法。")]),t._v(" "),s("p",[t._v("请见:\nhttps://github.com/MrGaoGang/luckly_popup_window\n  欢迎Star")]),t._v(" "),s("div",{staticClass:"language-Java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("     mLucklyPopopWindow "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LucklyPopopWindow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//给popupWindow添加数据")]),t._v("\n        mLucklyPopopWindow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getResources")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getStringArray")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("R")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("popupArray"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("R")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mipmap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("add"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("R")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mipmap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("delete"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("R")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mipmap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("modify"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("R")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mipmap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("update"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        mAdapter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setOnItemClickListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RecyclerAdapter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OnItemClickListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onItemClick")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("View")]),t._v(" view"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" position"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//必须设置宽度")]),t._v("\n                mLucklyPopopWindow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setWidth")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("150")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//监听事件")]),t._v("\n                mLucklyPopopWindow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setOnItemClickListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LucklyPopopWindow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OnItemClickListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onItemClick")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" position"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Toast")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("makeText")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MainActivity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"点击的位置"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" position"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Toast")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LENGTH_SHORT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("show")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                        mLucklyPopopWindow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dismiss")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//添加分割线(可选)")]),t._v("\n                mLucklyPopopWindow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addItemDecoration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LucklyPopopWindow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("VERTICAL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("GRAY"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置image不显示(可选)")]),t._v("\n               "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// mLucklyPopopWindow.setImageDisable(true);")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置image的大小(可选)")]),t._v("\n                mLucklyPopopWindow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setImageSize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//显示popopWindow")]),t._v("\n                mLucklyPopopWindow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("showAtLocation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getWindow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDecorView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" view"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);