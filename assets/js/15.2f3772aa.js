(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{264:function(_,v,e){"use strict";e.r(v);var a=e(17),i=Object(a.a)({},(function(){var _=this,v=_.$createElement,e=_._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("p",[e("code",[_._v("Android")]),_._v(" 提供三个平台框架，帧动画（太耗资源能不用就不用），补间动画（包括：淡入淡出 "),e("code",[_._v("AlphaAnimation，缩放")]),_._v(" "),e("code",[_._v("ScaleAnimation")]),_._v(",平移 "),e("code",[_._v("TranslationAnimation")]),_._v(",和旋转 "),e("code",[_._v("RotateAnimation")]),_._v("），和属性动画。")]),_._v(" "),e("h2",{attrs:{id:"一、使用属性动画"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、使用属性动画"}},[_._v("#")]),_._v(" 一、使用属性动画")]),_._v(" "),e("h3",{attrs:{id:"（一）补间动画局限性："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#（一）补间动画局限性："}},[_._v("#")]),_._v(" （一）补间动画局限性：")]),_._v(" "),e("ul",[e("li",[_._v("补间动画只能用于 View 对象，也就是继承于 View 或者 View 的控件。")]),_._v(" "),e("li",[_._v("只有四种动画操作，淡入淡出，缩放，平移，旋转")]),_._v(" "),e("li",[_._v("不见动画是改变 View 的显示效果，但是没有改变真正的属性。也就是假设 View 移动了，要是点击移动后的地方是没有用的，还是只能点击期初的位置。")])]),_._v(" "),e("h3",{attrs:{id:"（二）属性动画的特性："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#（二）属性动画的特性："}},[_._v("#")]),_._v(" （二）属性动画的特性：")]),_._v(" "),e("ul",[e("li",[_._v("持续时间：默认长度 300Ms")]),_._v(" "),e("li",[_._v("时间插值器（Time Interpolation）。能够指定为计算当前动画运行时间的函数的属性值来觉得动画范围内的变化频率。")]),_._v(" "),e("li",[_._v("重复次数和行为。")]),_._v(" "),e("li",[_._v("动画集合（AnimationsSet）")]),_._v(" "),e("li",[_._v("帧刷新延迟：默认 10s 刷新一次。")])]),_._v(" "),e("p",[_._v("具体的使用："),e("strong",[_._v("查看 View 相关技术--\x3eAnimation 相关---\x3e属性动画")])]),_._v(" "),e("h2",{attrs:{id:"二、硬件加速"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、硬件加速"}},[_._v("#")]),_._v(" 二、硬件加速")]),_._v(" "),e("h3",{attrs:{id:"（一）硬件加速原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#（一）硬件加速原理"}},[_._v("#")]),_._v(" （一）硬件加速原理")]),_._v(" "),e("p",[_._v("在硬件加速渲染模型中有一个重要的核心类："),e("strong",[_._v("DisplayList,每个 View 内部都会维护一个 DisplayList")]),_._v("。")]),_._v(" "),e("p",[_._v("在不支持硬件加速的版本中，View 的更新通过 "),e("code",[_._v("draw")]),_._v(" 和 "),e("code",[_._v("invalidate")]),_._v("()方法通知更新并重新渲染。")]),_._v(" "),e("p",[_._v("在支持硬件加速的版本中，其中执行绘制的 "),e("code",[_._v("draw")]),_._v(" 方法会把所有绘制命令记录到一个新的显示列表（DisplayList），这个 "),e("code",[_._v("DisplayList")]),_._v(" 包含输出的 View 层级绘制代码，但是并不是加入到显示列表立即执行，当 ViewTree 的 DisplayList 全部记录完毕后，由 "),e("code",[_._v("OpenGLRender")]),_._v(" 负责将 root view 的 "),e("code",[_._v("DisplayList")]),_._v(" 渲染到屏幕上，而 invalidate（）只是显示列表中的记录和更新显示层级就可以了，不用更新 View。")]),_._v(" "),e("h3",{attrs:{id:"（二）硬件加速的级别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#（二）硬件加速的级别"}},[_._v("#")]),_._v(" （二）硬件加速的级别")]),_._v(" "),e("ul",[e("li",[_._v('Application 级别：在 Mnifest.xml 文件中的 application 中添加属性：android:hardwareAccelerated="true"，这样整个应用都采用硬件加速')]),_._v(" "),e("li",[_._v("Activity 级别：在"),e("code",[_._v('<activity android:hardwareAccelerated="true"/>')])]),_._v(" "),e("li",[_._v("Window 级别："),e("code",[_._v("getWindow().setFlags(WindowManager.LayoutParams.FLAG_HARDWARE_ACCELERATED,WindowManager.LayoutParams.FLAG_HARDWARE_ACCELERATED).")])]),_._v(" "),e("li",[_._v("View 级别："),e("code",[_._v("View.setLayerType(View.LAYER_TYPE_SOFTWARE,null).")])])]),_._v(" "),e("h3",{attrs:{id:"三-在动画上使用硬件加速"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三-在动画上使用硬件加速"}},[_._v("#")]),_._v(" (三)在动画上使用硬件加速")]),_._v(" "),e("p",[_._v("使用 "),e("code",[_._v("view.setLayerType(type,Paint)")]),_._v("方法，第一个参数是使用的层类型，第二个参数为可选参数，可以吧 "),e("code",[_._v("paint")]),_._v(" 参数应用到颜色过滤上，特别是混合模式或者是对一个 Layer 进行不透明处理。\n类型有以下几种：")]),_._v(" "),e("ul",[e("li",[e("code",[_._v("LAYER_TYPE_NONE")]),_._v(":默认渲染方式，不会返回一个离线缓冲，默认值")]),_._v(" "),e("li",[e("code",[_._v("LAYER_TYPE_HARDWARE")]),_._v(":使用硬件加速")]),_._v(" "),e("li",[e("code",[_._v("LAYER_TYPE_SOFTWARE")]),_._v(":此 View 通过软件渲染为一个 Bitmap。")])]),_._v(" "),e("p",[_._v("设计动画的流程：\n将要执行动画的 "),e("code",[_._v("View")]),_._v(" 的 "),e("code",[_._v("TYPE")]),_._v(" 设置为 "),e("code",[_._v("LAYER_TYPE_HARDWARE。")]),_._v("\n计算动画 View 的属性和信息，更新 view 的属性\n若动画结束，将 "),e("code",[_._v("LayerType")]),_._v(" 设置为 "),e("code",[_._v("None。")])]),_._v(" "),e("h2",{attrs:{id:"三、硬件加速的问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、硬件加速的问题"}},[_._v("#")]),_._v(" 三、硬件加速的问题")]),_._v(" "),e("ul",[e("li",[_._v("在软件渲染的时候，可以重用 Bitmap 的方法来节省内存，但是如果开启硬件加速就不行了。")]),_._v(" "),e("li",[_._v("开启硬件加速的 view 在前台运行，需要耗费额外的内存，加速的 UI 切换到后台时，产生的额外内存可能不会释放。")]),_._v(" "),e("li",[_._v("当 UI 中存在过度绘制时候，硬件加速会比较容易发生问题。")])])])}),[],!1,null,null,null);v.default=i.exports}}]);