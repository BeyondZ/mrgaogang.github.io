(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{366:function(t,s,a){"use strict";a.r(s);var n=a(17),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[t._v("以下所有文件均是原创，如需转载请注明作者和链接地址。")])]),t._v(" "),a("blockquote",[a("p",[t._v("此文demo地址：https://github.com/mrgaogang/mendix")])]),t._v(" "),a("blockquote",[a("p",[t._v("日常开发中我们难免会有一些情况是无法使用微流实现的，此时需要我们使用Java原生的能力:JavaAction；此文主要介绍如何JavaAction对数据库的数据进行增删改查和使用action执行微流。")])]),t._v(" "),a("p",[t._v("目录:")]),t._v(" "),a("ul",[a("li",[t._v("数据添加；")]),t._v(" "),a("li",[t._v("数据删除；")]),t._v(" "),a("li",[t._v("数据修改；")]),t._v(" "),a("li",[t._v("数据查询；")]),t._v(" "),a("li",[t._v("使用Action执行微流；")])]),t._v(" "),a("h3",{attrs:{id:"javaaction使用注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javaaction使用注意事项"}},[t._v("#")]),t._v(" JavaAction使用注意事项")]),t._v(" "),a("p",[t._v("JavaAction使用有几个注意点：")]),t._v(" "),a("ol",[a("li",[t._v("executeAction()是mendix默认调用的方法，且我们只能在//BEGIN 和//END之间编写Java代码。")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" java"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("List"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("IMendixObject"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("executeAction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" throws Exception\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// BEGIN USER CODE")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//此处是你的代码")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// END USER CODE")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("如果你有大量的代码需要编写请在类的末尾以下两个分隔符之间编写")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// BEGIN EXTRA CODE")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// END EXTRA CODE")]),t._v("\n")])])]),a("h3",{attrs:{id:"一、数据的添加"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、数据的添加"}},[t._v("#")]),t._v(" 一、数据的添加")]),t._v(" "),a("blockquote",[a("p",[t._v("数据的创建可以使用Core.instantiate创建一个空的对象，也可直接new 出空对象；数据的提交可以使用obj.commit()可以使用Core.commit()")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" IMendixObject "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("executeAction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" throws Exception\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// BEGIN USER CODE")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//第一种方式使用 IMendxObject创建数据\t\t")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// IMendixObject ob=\tCore.instantiate(getContext(),"Demo.User");')]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// ob.setValue(getContext(),"UserName",UserName);')]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// ob.setValue(getContext(),"Password",Password);')]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// ob.setValue(getContext(),"Age",Age);')]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Core.commit(getContext(),ob);")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//第二种方式直接创建对象")]),t._v("\n\tUser us"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getContext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setUserName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UserName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setPassword")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAge")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//提交数据到数据库")]),t._v("\n\tus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("commit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getContext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//也可以使用以下方式")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Core.commit(getContext(),us.getMendixObject());")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" us"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getMendixObject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// END USER CODE")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("p",[t._v("二、数据的删除")]),t._v(" "),a("blockquote",[a("p",[t._v("数据的删除可以使用obj.delete()也可使用Core.delete()")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" java"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lang"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Boolean "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("executeAction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" throws Exception\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ParameterParameter1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" __ParameterParameter1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" demo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("proxies"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("User"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("initialize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getContext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" __ParameterParameter1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// BEGIN USER CODE")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//可以直接使用obj.delete")]),t._v("\n\t\t\tParameterParameter1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("delete")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getContext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 也可以使用Core.delete的方式删除数据")]),t._v("\n\t\t "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//return Core.delete(getContext(),ParameterParameter1.getMendixObject());")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// END USER CODE")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("三、数据的修改")]),t._v(" "),a("blockquote",[a("p",[t._v("数据的修改和数据的提交类似，只是在action将数据修改后重新提交。")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("\t@Override\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" IMendixObject "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("executeAction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" throws Exception\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ParameterParameter1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" __ParameterParameter1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" demo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("proxies"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("User"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("initialize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getContext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" __ParameterParameter1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// BEGIN USER CODE")]),t._v("\n\t\tParameterParameter1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setUserName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"===>我修改啦"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\tParameterParameter1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setPassword")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"我修改了密码"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\tParameterParameter1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAge")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v("L"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\tCore"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("commit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getContext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("ParameterParameter1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getMendixObject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ParameterParameter1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getMendixObject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// END USER CODE")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("四、查询数据")]),t._v(" "),a("blockquote",[a("p",[t._v("数据的查询主要使用以下几种方式")])]),t._v(" "),a("ol",[a("li",[t._v("Core.retrieveXPathQuery()")]),t._v(" "),a("li",[t._v("Core.retrieveXPathQueryAggregate()")]),t._v(" "),a("li",[t._v("Core.\tretrieveId()")]),t._v(" "),a("li",[t._v("Core.\tretrieveIdAsync()")])]),t._v(" "),a("blockquote",[a("p",[t._v("其中XPath查询数据需要在前方加上// ；但是在mendix客户端编写xpath（比如在datagrid查询数据使用xpath）时 不需要加上//。")])]),t._v(" "),a("ul",[a("li",[t._v("//Demo.User 检索所有用户。")]),t._v(" "),a("li",[t._v("//Demo.User[UserName='mrgao'] 检索名为'mrgao'的所有用户。")]),t._v(" "),a("li",[t._v("avg(//Demo.User[Age >10 ]/Age) 检索所有用户年龄大于10岁的 年龄平均数。")])]),t._v(" "),a("p",[t._v("其中XPath可用的函数有：\navg、count、max、min、sum、contains、starts-with、ends-with、not、true、false")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("\t@Override\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" java"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("List"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("IMendixObject"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("executeAction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" throws Exception\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// BEGIN USER CODE")]),t._v("\n\t\tList"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("IMendixObject"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" list"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Core"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("retrieveXPathQuery")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getContext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"//Demo.User"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// END USER CODE")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("p",[t._v("五、执行微流")]),t._v(" "),a("blockquote",[a("p",[t._v("微流的执行科分为同步执行execute()和异步执行executeAsyn()；此例子主要以同步执行为例；")])]),t._v(" "),a("ol",[a("li",[t._v("微流执行时参数的传递主要使用Map<String,Object>的方式，且Key必须要和参数入参名称相同；")]),t._v(" "),a("li",[t._v("如果传入的是Object类型，则需要转化成mendixobject；")]),t._v(" "),a("li",[t._v("微流执行完成可获取到其返回的参数；")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" java"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lang"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("String "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("executeAction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" throws Exception\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ParameterParameter1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" __ParameterParameter1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" demo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("proxies"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("User"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("initialize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getContext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" __ParameterParameter1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// BEGIN USER CODE")]),t._v("\n\t\tMap"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("String"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("Object"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" map"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HashMap")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//记得转换成mendixobject,且Map的key需要和微流入参的名称一样")]),t._v("\n\t\tmap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"User"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("ParameterParameter1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getMendixObject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\tmap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"other"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("other"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//执行微流，mf为微流，map则为需要执行微流的入参")]),t._v("\n\t\tString result"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Core"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("execute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getContext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("mf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// END USER CODE")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("如果还想了解更多相关Core的知识，请访问官方API "),a("a",{attrs:{href:"https://apidocs.mendix.com/7/runtime/com/mendix/core/Core.html#retrieveXPathQuery-com.mendix.systemwideinterfaces.core.IContext-java.lang.String-",target:"_blank",rel:"noopener noreferrer"}},[t._v("：Mendix官方CoreAPI"),a("OutboundLink")],1),t._v("   以及IMendixObject的API "),a("a",{attrs:{href:"https://apidocs.mendix.com/7/runtime/com/mendix/systemwideinterfaces/core/IMendixObject.html",target:"_blank",rel:"noopener noreferrer"}},[t._v(":IMendixObject官方API"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);