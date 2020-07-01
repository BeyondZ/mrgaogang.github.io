(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{374:function(e,n,t){"use strict";t.r(n);var a=t(18),r=Object(a.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("blockquote",[t("p",[e._v("原生前端API主要有一下几个：")])]),e._v(" "),t("blockquote",[t("p",[e._v("1、mx.ui/mx.data/mx.server/mx.session : "),t("a",{attrs:{href:"https://apidocs.mendix.com/7/client/mx.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("链接"),t("OutboundLink")],1)])]),e._v(" "),t("blockquote",[t("p",[e._v("2、mendix ："),t("a",{attrs:{href:"https://apidocs.mendix.com/7/client/mendix_lib_MxObject.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("链接"),t("OutboundLink")],1)])]),e._v(" "),t("blockquote",[t("p",[e._v("3、mxui : "),t("a",{attrs:{href:"https://apidocs.mendix.com/7/client/mxui_widget__WidgetBase.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("链接"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"一、常用的api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、常用的api"}},[e._v("#")]),e._v(" 一、常用的API")]),e._v(" "),t("h3",{attrs:{id:"一-从实体中获取-创建-删除数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一-从实体中获取-创建-删除数据"}},[e._v("#")]),e._v(" (一) 从实体中获取/创建/删除数据")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('mx.data.get({\n    xpath: "//System.User",\n    filter: {\n        sort: [["Name", "asc"]],\n        offset: 0,\n        amount: 10\n    },\n    callback: function(objs) {\n        console.log("Received " + objs.length + " MxObjects");\n    }\n});\n\n\nmx.data.create({\n    entity: "MyFirstModule.Cat",\n    callback: function(obj) {\n        console.log("Object created on server");\n    },\n    error: function(e) {\n        console.error("Could not commit object:", e);\n    }\n})\n\nmx.data.remove({\n    guids: [ "123456", "45678" ],\n    callback: function() {\n        console.log("Objects removed");\n    },\n    error: function(e) {\n        console.log("Could not remove objects:", e);\n    }\n});\n')])])]),t("h3",{attrs:{id:"（二）执行微流"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#（二）执行微流"}},[e._v("#")]),e._v(" （二）执行微流")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('mx.ui.action("微流的名称",{\n    context:上下文,\n    progress: "modal",\n    progressMsg:"进度条消息",\n    callback: function(result) {\n        console.log("Engine started: " + result);\n    }\n})\n\nmx.data.action({\n    params: {\n        applyto: "selection"\n        actionname: "微流",\n        guids: [ "281530811285515", "281530811285506"]//需要传递的参数\n    },\n    callback: function(obj) {\n        // expect single MxObject\n        alert(obj.get("manufacturer"));\n    },\n    error: function(error) {\n        alert(error.message);\n    }\n});\n')])])]),t("h3",{attrs:{id:"（三）打开页面"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#（三）打开页面"}},[e._v("#")]),e._v(" （三）打开页面")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('/**\n请见：https://apidocs.mendix.com/7/client/mendix_lib_MxContext.html\n*/\n//上下文如何获取?\nvar _context=mendix.lib.MxContext();\n_context.setTrackEntity(你需要传递的实体)\n//或者使用_context.setTrackId(你需要传递的guid)\nmx.ui.openForm("页面",{\n    location: "content/popup/modal",\n    context:_context,\n    callback: function(form) {\n        console.log(form.id);\n    }\n})\n')])])]),t("h3",{attrs:{id:"（四）监听实体值得变化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#（四）监听实体值得变化"}},[e._v("#")]),e._v(" （四）监听实体值得变化")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('//监听某个实体的变化\nvar subscription = mx.data.subscribe({\n    guid: "123213",\n    callback: function(guid) {\n        console.log("Object with guid " + guid + " changed");\n    }\n});\n\nmx.data.unsubscribe(subscription);\n\n\n//监听实体某个属性的变化\nvar subscription = mx.data.subscribe({\n    guid: "123213",\n    attr: "Name",\n    callback: function(guid, attr, value) {\n        console.log("Object with guid " + guid + " had its attribute " +\n                    attr + " change to " + value);\n    }\n});\n\nmx.data.unsubscribe(subscription);\n\n//监听整个实体的变化\n// Subscribe to changes in a class\nvar subscription = mx.data.subscribe({\n    entity: "System.User",\n    callback: function(entity) {\n        console.log("Update on entity " + entity);\n    }\n});\n\nmx.data.unsubscribe(subscription);\n')])])]),t("h3",{attrs:{id:"（五）查询管理关系的数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#（五）查询管理关系的数据"}},[e._v("#")]),e._v(" （五）查询管理关系的数据")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('//多对一关系，路径要指定到关联关系实体的字段\nobj.fetch("Demo.Test/Test_Test2/test2Attr",function(data){\n    //成功回调数据，返回的是一条数据\n},function(){\n    \n});\n\n//多对对一关系，路径要指定到关联关系实体，不能是字段\nobj.fetch("Demo.Test/Test_Test3",function(data){\n    //成功回调数据，返回的是一个列表数据\n},function(){\n    \n});\n\n')])])]),t("h3",{attrs:{id:"（六）创建一个上下文"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#（六）创建一个上下文"}},[e._v("#")]),e._v(" （六）创建一个上下文")]),e._v(" "),t("p",[e._v("详情请见:"),t("a",{attrs:{href:"https://apidocs.mendix.com/7/client/mendix_lib_MxContext.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("组件开发上下文"),t("OutboundLink")],1)]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("var context=mendix.lib.MxContext();\ncontext.setTrackEntity(你的obj)\n\n\n")])])]),t("h2",{attrs:{id:"二、组件开发xml文档"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、组件开发xml文档"}},[e._v("#")]),e._v(" 二、组件开发XML文档")]),e._v(" "),t("h3",{attrs:{id:"（一）property配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#（一）property配置"}},[e._v("#")]),e._v(" （一）property配置")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('<property key="你的键" type="配置的类型" 其他的请见下面>\n\n\n</property>\n\n\n1、配置的类型有：\n   <xs:enumeration value="attribute"/>\n    <xs:enumeration value="boolean"/>\n    <xs:enumeration value="entity"/>\n    <xs:enumeration value="entityConstraint"/>\n    <xs:enumeration value="enumeration"/>\n    <xs:enumeration value="form"/>//页面\n    <xs:enumeration value="image"/>\n    <xs:enumeration value="integer"/>\n    <xs:enumeration value="microflow"/>//微流\n    <xs:enumeration value="object"/>\n    <xs:enumeration value="string"/>\n    <xs:enumeration value="translatableString"/>\n\n2、其他配置项\nisList="" //是否为列表配置，只有当type="object"的时候有效\n\nentityProperty="配置实体的key" \n//执行微流时入参的实体，注意此处的Key为相对位置；\n//也即是如果这个key所在的property和你配置的property在同一层级，\n//那么就直接使用实体的key，要是此propery比实体的property深一层，\n//那么此处就要写:   ../实体的key\n\nallowNonPersistableEntities="false"//是否允许非持久化实体\n\nisPath="no"//是否可通过关联取数据\n\nparameterIsList="false/true"//微流的入参是否为List<Object>的形式\n\nmultiline="false"//当type="string"的时候是否支持多行\n\ndefaultValue=""//默认值\n\nrequired="false/true"//此配置项是否必须配置\n\nisDefault="false"//是否默认\n')])])]),t("h3",{attrs:{id:"（二）两个例子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#（二）两个例子"}},[e._v("#")]),e._v(" （二）两个例子")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('\n1、枚举选择，实际在读取的时候是按照key\n\n<property key="emnu" type="enumeration" defaultValue="popup">\n    <caption>名称</caption>\n    <category>分类</category>\n    <description>描述</description>\n    <enumerationValues>\n        <enumerationValue key="popup">弹窗</enumerationValue>\n        <enumerationValue key="content">当前页面</enumerationValue>\n    </enumerationValues>\n</property>\n\n2、实体配置\n<property key="enti" type="entity" isPath="true">\n    <caption>名称</caption>\n    <category>分类</category>\n    <description>描述</description>\n\n</property>\n\n\n3、微流配置（接受list<object>方式的入参）\n<property key="mf" type="microflow" entityProperty="enti"parameterIsList="true">\n    <caption>名称</caption>\n    <category>分类</category>\n    <description>描述</description>\n    <returnType type="Void"/>\n    或者\n     <returnType type="Object" isList="true" entityProperty="enti"/>\n</property>\n\n\n//上述的returnType的type可以有\n<xs:enumeration value="Void"/>\n<xs:enumeration value="Boolean"/>\n<xs:enumeration value="Integer"/>\n<xs:enumeration value="Decimal"/>\n<xs:enumeration value="DateTime"/>\n<xs:enumeration value="String"/>\n<xs:enumeration value="Object"/>\n\n\n4、选择实体的属性\n<property key="attr" type="attribute" required="true">\n    <caption>名称</caption>\n    <category>分类</category>\n    <description>描述</description>\n    <attributeTypes>\n        <attributeType name="AutoNumber"/>\n         <attributeType name="Decimal"/>\n    </attributeTypes>\n</property>\n\n//所有可能的类型有:\n            <xs:enumeration value="AutoNumber"/>\n            <xs:enumeration value="Binary"/>\n            <xs:enumeration value="Boolean"/>\n            <xs:enumeration value="DateTime"/>\n            <xs:enumeration value="Decimal"/>\n            <xs:enumeration value="Enum"/>\n            <xs:enumeration value="HashString"/>\n            <xs:enumeration value="Integer"/>\n            <xs:enumeration value="Long"/>\n            <xs:enumeration value="String"/>\n\n5、选择实体的属性\n//所选择的属性为某个实体下面的属性\n<property key="attr" type="attribute" required="true" entityProperty="enti">\n    <caption>名称</caption>\n    <category>分类</category>\n    <description>描述</description>\n    <attributeTypes>\n        <attributeType name="AutoNumber"/>\n         <attributeType name="Decimal"/>\n    </attributeTypes>\n</property>\n\n\n\n')])])])])}),[],!1,null,null,null);n.default=r.exports}}]);