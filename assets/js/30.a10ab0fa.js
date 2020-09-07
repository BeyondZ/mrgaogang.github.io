(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{303:function(a,s,t){"use strict";t.r(s);var e=t(1),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("目标检测主要步骤有:")]),a._v(" "),t("ol",[t("li",[a._v("使用 labelimg 对图片做标注")]),a._v(" "),t("li",[a._v("使用 object_detection 下的工具 create_pascal_tf_record 将 xml 文件转换成 tfrecord 文件或者将 xml 转化昵称 csv 然后将 csv 转换成 tfrecord 文件")]),a._v(" "),t("li",[a._v("仿照 TensorFlow models/research/object_detection/data 文件夹下的 .pbtxt 文件编写自己的 .pbtxt 文件")]),a._v(" "),t("li",[a._v("选择目标算法并从 TensorFlow models/research/object_detection/samples/configs 文件夹内选择合适的一个 .config 文件(团队使用的是 ssd)并修改对应的参数，其中包括步数 num_steps，以及模型文件输出路径")]),a._v(" "),t("li",[a._v("选择 TensorFlow 中训练好的模型 SSD/Fast-RCNN 并选择 object_detection 中对应的 api 进行模型训练")]),a._v(" "),t("li",[a._v("使用训练好的模型进行目标检测；")]),a._v(" "),t("li",[a._v("如果训练出来的准确率不是很高需要对步长，算法以及 batch_size 进行微调")])]),a._v(" "),t("h2",{attrs:{id:"一、安装依赖及环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、安装依赖及环境","aria-hidden":"true"}},[a._v("#")]),a._v(" 一、安装依赖及环境")]),a._v(" "),t("p",[a._v("0、使用 pyenv 新增一个虚拟环境")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("    pyenv virtualenv "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3.7")]),a._v(".5 object_detection_demo\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("source")]),a._v(" ~/.bashrc\n    pyenv activate object_detection_demo\n")])])]),t("p",[a._v("1、安装 Python 、TensorFlow 和其他依赖项")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("    pip "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("tensorflow")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.3")]),a._v(".1\n    pip "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("Pillow")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("5.4")]),a._v(".1\n    pip "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("lxml")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("4.3")]),a._v(".2\n    pip "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("jupyter")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.0")]),a._v(".0\n    pip "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("matplotlib")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3.0")]),a._v(".3\n")])])]),t("p",[a._v("2、安装 "),t("code",[a._v("Protoc")]),a._v(", 进入"),t("a",{attrs:{href:"https://github.com/protocolbuffers/protobuf/releases",target:"_blank",rel:"noopener noreferrer"}},[a._v("Protoc"),t("OutboundLink")],1),a._v("下载页，下载对应的编译好的 zip 包。")]),a._v(" "),t("p",[a._v("下载后"),t("code",[a._v("bin")]),a._v("目录下会有一个"),t("code",[a._v("protoc")]),a._v("二进制文件，覆盖到对应目录：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("    "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" bin/protoc /usr/local/bin/protoc\n")])])]),t("p",[a._v("注意：应该拷贝到/usr/local/bin（可以读写）目录下不是/usr/bin（只读），否则会提示 Operation not permitted, 这一步踩了好多坑。")]),a._v(" "),t("p",[a._v("3、从"),t("code",[a._v("github")]),a._v("上下载目标检测 API 的源代码")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("    "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone --branch r1.13.0 --depth "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" https://github.com/tensorflow/models\n")])])]),t("p",[a._v("4、编译"),t("code",[a._v("Protobuf")]),a._v("，进入 tensorflow/models/research 目录，运行下面命令进行编译：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("    protoc object_detection/protos/*.proto --python_out"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(".\n")])])]),t("p",[a._v("5、在当前目录下，添加"),t("code",[a._v("slim")]),a._v("环境变量")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("PYTHONPATH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$PYTHONPATH")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("pwd")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("pwd")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("/slim\n")])])]),t("p",[a._v("6、测试目标检测 API 是否安装成功，下图中表示安装成功")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("    python object_detection/builders/model_builder_test.py\n")])])]),t("p",[t("img",{attrs:{src:"/images/ai/demo/1.png",alt:"/images/ai/demo"}})]),a._v(" "),t("p",[a._v("7、运行"),t("code",[a._v("notebook Demo")]),a._v("，浏览器会自动跳转至如下界面：")]),a._v(" "),t("p",[t("img",{attrs:{src:"/images/ai/demo/2.png",alt:"/images/ai/demo"}})]),a._v(" "),t("p",[a._v("进入 object_detection 文件夹中的 object_detection_tutorial.ipynb：")]),a._v(" "),t("p",[t("img",{attrs:{src:"/images/ai/demo/3.png",alt:"/images/ai/demo"}})]),a._v(" "),t("p",[a._v("7、点击 Cell 内的"),t("code",[a._v("Run All")]),a._v("，等待 3 分钟左右，就可以显示如下效果：")]),a._v(" "),t("p",[t("img",{attrs:{src:"/images/ai/demo/4.png",alt:"/images/ai/demo"}})]),a._v(" "),t("p",[a._v("8、新增自己的图片再次测试")]),a._v(" "),t("p",[a._v("在 models/research/object_detection/test_images 中新增一张图片，并且命名为 imageX.jpg。")]),a._v(" "),t("p",[t("img",{attrs:{src:"/images/ai/demo/5.png",alt:"/images/ai/demo"}})]),a._v(" "),t("p",[a._v("然后更改")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("    TEST_IMAGE_PATHS "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(" os.path.join"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("PATH_TO_TEST_IMAGES_DIR, "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'image{}.jpg'")]),a._v(".format"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("))")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[a._v("i")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("in")]),a._v(" range"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(", "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),t("p",[a._v("结果：")]),a._v(" "),t("p",[t("img",{attrs:{src:"/images/ai/demo/6.png",alt:"/images/ai/demo"}})]),a._v(" "),t("h2",{attrs:{id:"可能会遇到的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#可能会遇到的问题","aria-hidden":"true"}},[a._v("#")]),a._v(" 可能会遇到的问题")]),a._v(" "),t("p",[a._v("1、AttributeError: module 'tensorflow' has no attribute 'contrib'")]),a._v(" "),t("p",[a._v("解决办法：因为 tf2.0 已经将 contrib 剥离，所以需要回退到 tf1.x")])])}),[],!1,null,null,null);s.default=r.exports}}]);