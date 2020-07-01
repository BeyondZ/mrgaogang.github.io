(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{407:function(t,a,s){"use strict";s.r(a);var e=s(18),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("其实Vue和React都是"),s("code",[t._v("单向数据流")]),t._v("，只是Vue提供了类似于"),s("code",[t._v("v-model")]),t._v("的方式做"),s("code",[t._v("双向绑定")]),t._v("。那么什么是单向数据流？个人理解如下：")]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/vue/data-flow.png",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"理解react单选数据流"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#理解react单选数据流"}},[t._v("#")]),t._v(" 理解React单选数据流")]),t._v(" "),s("ol",[s("li",[t._v("react是单向数据流，react中"),s("code",[t._v("属性是不允许更改")]),t._v("的，"),s("code",[t._v("状态是允许更改的")]),t._v("。react中组件不允许通过this.state这种方式直接更改组件的状态。自身设置的状态，可以通过setState来进行更改。在setState中，传入一个对象，就会将组件的状态中键值对的部分更改，还可以传入一个函数，这个回调函数必须向上面方式一样的一个对象函数可以接受prevState和props。通过调用this.setState去更新this.state,不能直接操作this.state，请把它当成不可变的。")]),t._v(" "),s("li",[t._v("调用setState更新this.state，它不是马上就会生效的，它是异步的。所以不要认为调用完setState后可以立马获取到最新的值。多个顺序执行的setState不是同步的一个接着一个的执行，会加入一个异步队列，然后最后一起执行，即批处理。")]),t._v(" "),s("li",[s("code",[t._v("setState是异步的")]),t._v("，导致获取dom可能拿的还是之前的内容，所以我们需要在setState第二个参数（回调函数）中获取更新后的新的内容")])]),t._v(" "),s("h2",{attrs:{id:"理解vue单选数据流"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#理解vue单选数据流"}},[t._v("#")]),t._v(" 理解Vue单选数据流")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Vue也是"),s("code",[t._v("单向数据流")]),t._v("，经常在网上看一些文档，都会写Vue双向绑定，请注意区分"),s("code",[t._v("单向数据流")]),t._v("和"),s("code",[t._v("双向绑定")]),t._v("两者的概念。")])]),t._v(" "),s("li",[s("p",[t._v("在Vue中父组件通过props的方式传递数据给子组价，子组件是不允许直接修改父组件的props的;当开发者尝试这样做的时候，vue 将会报错。这样做是为了组件间更好的解耦，在开发中可能有多个子组件依赖于父组件的某个数据，假如子组件可以修改父组件数据的话，一个子组件变化会引发所有依赖这个数据的子组件发生变化，所以 vue 不推荐子组件修改父组件的数据，直接修改 props 会抛出警告。")])]),t._v(" "),s("li",[s("p",[t._v("我们在网上看到的"),s("code",[t._v("Vue双向绑定")]),t._v("概念，其实是Vue的一种语法糖,"),s("code",[t._v("v-model")]),t._v("的原理，其实是:")])])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 如果是input/checkout等组件 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-model")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("something"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 其实是这样的 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("something"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@input")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("something = $event.target.value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 自定义组件 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Child")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-model")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("something"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Child")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 然后在child中使用$emit的方式更新something --\x3e")]),t._v('\nthis.$emit("input",newValue)\n')])])])])}),[],!1,null,null,null);a.default=n.exports}}]);