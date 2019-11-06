(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{251:function(t,a,s){"use strict";s.r(a);var r=s(0),n=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("此文内容："),s("strong",[t._v("各类图表公用配置属性")])]),t._v(" "),s("p",[t._v("阅读此文，大概需要5分钟。相信您已经知晓构建一个图表的基础步骤：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("o"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("chart "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"normalData"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("col"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("defs"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"normaColConfig"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("tooltip"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"normalTootip"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("o"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("line "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("axis"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"normaAxis"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("position"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"'date*value'\"")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("o"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("line"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("o"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("chart"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n")])])]),s("blockquote",[s("p",[t._v("上一篇文章讲述了o-chart的配置，如果您没有查阅"),s("a",{attrs:{href:"https://mrgaogang.github.io/article/oview/Chart.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("图表Chart"),s("OutboundLink")],1),t._v("，请先移步查看。这边文章主要讲述各个图表具体实现配置。目前oview支持的所有图表类型有：")])]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://mrgaogang.github.io/oview/docs/#/pie",target:"_blank",rel:"noopener noreferrer"}},[t._v("饼状图"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://mrgaogang.github.io/oview/docs/#/histo",target:"_blank",rel:"noopener noreferrer"}},[t._v("柱状图"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://mrgaogang.github.io/oview/docs/#/line",target:"_blank",rel:"noopener noreferrer"}},[t._v("折线图"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://mrgaogang.github.io/oview/docs/#/radar",target:"_blank",rel:"noopener noreferrer"}},[t._v("雷达图"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://mrgaogang.github.io/oview/docs/#/point",target:"_blank",rel:"noopener noreferrer"}},[t._v("散点图和气泡图"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://mrgaogang.github.io/oview/docs/#/area",target:"_blank",rel:"noopener noreferrer"}},[t._v("面积图"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("下面将对，各类图表公用配置属性进行简单介绍，主要包括:position(坐标轴) , axis(多个坐标轴具体配置) , colors(颜色) , animate(动画),chartStyle(图表样式）, size（数据图形大小）")]),t._v(" "),s("h3",{attrs:{id:"position-坐标轴"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#position-坐标轴","aria-hidden":"true"}},[t._v("#")]),t._v(" position (坐标轴)")]),t._v(" "),s("ul",[s("li",[t._v("是否必须:"),s("strong",[t._v("True")])]),t._v(" "),s("li",[t._v("参数类型:String")]),t._v(" "),s("li",[t._v("说明: 配置x,y坐标轴，示例:"),s("code",[t._v('position="date*value"')]),t._v("，其中date为x轴,value为y轴。饼状图较为特殊，需传"),s("code",[t._v('position="name*percent"')]),t._v("名字和百分比，"),s("strong",[t._v("其中percent为数据结构中必有字段")])]),t._v(" "),s("li",[t._v("示例:")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("o"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("line "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("axis"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"normaAxis"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("position"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"'date*value'\"")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("o"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("line"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("o"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("pie "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("coord"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"coord"')]),t._v(" position"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name*percent"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("o"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("pie"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n")])])]),s("h3",{attrs:{id:"adjust-数据调整"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#adjust-数据调整","aria-hidden":"true"}},[t._v("#")]),t._v(" adjust(数据调整)")]),t._v(" "),s("ul",[s("li",[t._v("是否必须:"),s("strong",[t._v("False")])]),t._v(" "),s("li",[t._v("参数类型:"),s("strong",[t._v("Object")])]),t._v(" "),s("li",[t._v("默认值:"),s("code",[t._v("{type:'stack'}")])]),t._v(" "),s("li",[t._v("说明:声明几何标记对象的数据调整方式，可用于绘制层叠图、分组图等。支持单一的数据调整方式也支持各种数据调整方式的组合。"),s("strong",[t._v("支持的调整类型包括：'stack', 'dodge'")])])]),t._v(" "),s("h3",{attrs:{id:"axis-多个坐标轴具体配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#axis-多个坐标轴具体配置","aria-hidden":"true"}},[t._v("#")]),t._v(" axis (多个坐标轴具体配置)")]),t._v(" "),s("ul",[s("li",[t._v("是否必须:"),s("strong",[t._v("False")])]),t._v(" "),s("li",[t._v("参数类型:"),s("strong",[t._v("Array")])]),t._v(" "),s("li",[t._v("注意："),s("strong",[t._v("如使用axis，请必须上fieldName配置项,表示对某个坐标轴的具体配置")])]),t._v(" "),s("li",[t._v("说明: 多单个或者多个坐标轴，镜像详细配置,配置坐标轴的文本(label)，轴线(line)，刻度线(tickLine)，网格线(grid)。"),s("a",{attrs:{href:"https://www.yuque.com/antv/f2/api-axis#5kktpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("详细配置文档"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("示例:")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//以雷达图具体配置（此例子对两个坐标轴的文本和网格线进行配置）")]),t._v("\n   normaAxis"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          fieldName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"score"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//注意fieldName为必传项，表示对某个坐标轴的具体配置")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("label")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("label")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" total")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" total "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              top"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          grid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            lineDash"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"arc"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 弧线网格")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          fieldName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"item"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          grid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            lineDash"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n")])])]),s("h3",{attrs:{id:"colors-颜色"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#colors-颜色","aria-hidden":"true"}},[t._v("#")]),t._v(" colors (颜色)")]),t._v(" "),s("ul",[s("li",[t._v("是否必须:False")]),t._v(" "),s("li",[t._v("参数类型:"),s("strong",[t._v("Array")])]),t._v(" "),s("li",[t._v('说明: 默认值为["#1890FF","#13C2C2","#2FC25B","#FACC14","#F04864","#8543E0"]，如需要图表显示为单个颜色，请传入一个值即可')])]),t._v(" "),s("h3",{attrs:{id:"colorfield"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#colorfield","aria-hidden":"true"}},[t._v("#")]),t._v(" colorField")]),t._v(" "),s("ul",[s("li",[t._v("是否必须:False")]),t._v(" "),s("li",[t._v("参数类型:String")]),t._v(" "),s("li",[t._v("说明: 为哪个坐标轴设置颜色")])]),t._v(" "),s("h3",{attrs:{id:"animate-动画"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#animate-动画","aria-hidden":"true"}},[t._v("#")]),t._v(" animate (动画)")]),t._v(" "),s("ul",[s("li",[t._v("是否必须:False")]),t._v(" "),s("li",[t._v("参数类型:"),s("strong",[t._v("Object")])]),t._v(" "),s("li",[t._v("说明:给x，y轴设置动画。"),s("a",{attrs:{href:"https://www.yuque.com/antv/f2/api-animate#1fwryo",target:"_blank",rel:"noopener noreferrer"}},[t._v("详细文档"),s("OutboundLink")],1)])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("o"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("chart "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"normalData"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("legend"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"normalLegend"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("col"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("defs"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"normalColumnConfig"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("o"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("radar\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("axis"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"normaAxis"')]),t._v("\n        is"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("area\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("animate"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"animate"')]),t._v("\n        position"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"item*score"')]),t._v("\n        color"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("field"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user"')]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("o"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("radar"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("o"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("chart"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//data部分")]),t._v("\n animate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//可以配置动效哦")]),t._v("\n    appear"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        animation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"groupWaveIn"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        delay"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//延迟500s")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("h3",{attrs:{id:"chartstyle（图表样式）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#chartstyle（图表样式）","aria-hidden":"true"}},[t._v("#")]),t._v(" chartStyle（图表样式）")]),t._v(" "),s("ul",[s("li",[t._v("是否必须:False")]),t._v(" "),s("li",[t._v("参数类型:"),s("strong",[t._v("Object")])]),t._v(" "),s("li",[t._v("说明: 为图表设置样式。\n示例:")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("o"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("point\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("axis"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"normaAxis"')]),t._v("\n    position"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"height*weight"')]),t._v("\n    color"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("field"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"gender"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("chart"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("style"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{fillOpacity: 0.65}"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("o"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("point"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n")])])]),s("h3",{attrs:{id:"size（数据图形大小）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#size（数据图形大小）","aria-hidden":"true"}},[t._v("#")]),t._v(" size（数据图形大小）")]),t._v(" "),s("ul",[s("li",[t._v("是否必须:False")]),t._v(" "),s("li",[t._v("参数类型:"),s("strong",[t._v("Object")])]),t._v(" "),s("li",[t._v("说明:常用于散点图、气泡图。 将数据值映射到图形的大小上的方法。"),s("a",{attrs:{href:"https://www.yuque.com/antv/f2/api-geometry#75hbfn",target:"_blank",rel:"noopener noreferrer"}},[t._v("详细文档"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("注意："),s("strong",[t._v("fieldName")]),t._v("字段为必传项，表示对那个坐标轴的配置。且 "),s("strong",[t._v("不同图形的 size 的含义有所差别")]),t._v("：\n"),s("ul",[s("li",[t._v("point 图形的 size 影响点的半径大小；")]),t._v(" "),s("li",[t._v("line, area, path 中的 size 影响线的粗细；")]),t._v(" "),s("li",[t._v("interval 的 size 影响柱状图的宽度。")])])]),t._v(" "),s("li",[t._v("此处暂时只支持，回调的方式。")])]),t._v(" "),s("p",[t._v("示例:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    fieldName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"z"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("callback")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("z")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);