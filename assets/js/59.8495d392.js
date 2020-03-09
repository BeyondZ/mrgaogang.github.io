(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{232:function(e,t,o){"use strict";o.r(t);var s=o(17),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("blockquote",[o("p",[e._v("以下所有文件均是原创，如需转载请注明作者和链接地址。")])]),e._v(" "),o("p",[e._v("目录：")]),e._v(" "),o("ul",[o("li",[e._v("一、Docker的安装")]),e._v(" "),o("li",[e._v("二、Docker Compose安装")]),e._v(" "),o("li",[e._v("三、Mendix环境搭建")]),e._v(" "),o("li",[e._v("四、启动成功")]),e._v(" "),o("li",[e._v("五、Mendix后台环境搭建注意事项\n"),o("ul",[o("li",[e._v("1、端口是否已被占用")]),e._v(" "),o("li",[e._v("2、登录时为何使用Administor无法登录")]),e._v(" "),o("li",[e._v("3、docker-compose-mysql字段简要介绍")]),e._v(" "),o("li",[e._v("4 、访问地址为何过总是报错502")])])])]),e._v(" "),o("blockquote",[o("p",[e._v("当在Mendix Desktop上编写完成项目，此时需要打包发布；首先请在客户端 --\x3eProject--\x3eCreate Deployement  Project；\n"),o("img",{staticStyle:{"text-align":"center"},attrs:{src:"https://note.youdao.com/yws/public/resource/0987e4f96f6b436ed52b85016f1c84f8/xmlnote/WEBRESOURCE49021e83598f5daad897a346d65ebc63/33991",width:"700",height:"400"}})])]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("Mendix后台程序需要运行在Docker环境下，此文主要介绍mendix如何在centos下运行。\n打包环境必须为生产环境：\n")])])]),o("p",[o("img",{attrs:{src:"https://note.youdao.com/yws/public/resource/0987e4f96f6b436ed52b85016f1c84f8/xmlnote/WEBRESOURCE0f4b5e4d659abfd9fb58184d49346712/33988",alt:""}})]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("Mendix程序需要运行需要的环境限制：\n")])])]),o("p",[e._v("在Centos7.3及以上版本,且Docker 要求 CentOS 系统的内核版本高于 3.10；\n由于Mendix运行的Docker compose版本为1.22,所以请安装Docker 17.06.2。")]),e._v(" "),o("h3",{attrs:{id:"一、docker的安装"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#一、docker的安装"}},[e._v("#")]),e._v(" 一、Docker的安装")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("1、Docker 要求 CentOS 系统的内核版本高于 3.10 ，查看本页面的前提条件来验证你的CentOS 版本是否支持 Docker 。\n通过 uname -r 命令查看你当前的内核版本\n$ uname -r")])]),e._v(" "),o("li",[o("p",[e._v("2、使用 root 权限登录 Centos。确保 yum 包更新到最新。\n$ sudo yum update")])]),e._v(" "),o("li",[o("p",[e._v("3、卸载旧版本(如果安装过旧版本的话)\n$ sudo yum remove docker  docker-common docker-selinux docker-engine")])]),e._v(" "),o("li",[o("p",[e._v("4、安装需要的软件包， yum-util 提供yum-config-manager功能，另外两个是devicemapper驱动依赖的\n$ sudo yum install -y yum-utils device-mapper-persistent-data lvm2")])]),e._v(" "),o("li",[o("p",[e._v("5、设置yum源\n$ sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo\n"),o("img",{attrs:{src:"https://note.youdao.com/yws/public/resource/0987e4f96f6b436ed52b85016f1c84f8/xmlnote/F762973DA5CE4BD69D91C962DB0184CC/33878",alt:""}})])]),e._v(" "),o("li",[o("p",[e._v("6、可以查看所有仓库中所有docker版本，并选择特定版本安装\n$ yum list docker-ce --showduplicates | sort -r")])])]),e._v(" "),o("img",{attrs:{src:"https://note.youdao.com/yws/public/resource/0987e4f96f6b436ed52b85016f1c84f8/xmlnote/9633B2B29917464D891698FE75048B3E/33887",width:"700",height:"400"}}),e._v("\n- 7、安装docker\n$ sudo yum install docker-ce-17.06.2  #安装的是最新稳定版17.06.2\n- 8、启动并加入开机启动\n$ sudo systemctl start docker\n$ sudo systemctl enable docker\n- 9、验证安装是否成功(有client和service两部分表示docker安装启动都成功了)\n$ docker version\n"),o("img",{attrs:{src:"https://note.youdao.com/yws/public/resource/0987e4f96f6b436ed52b85016f1c84f8/xmlnote/084DEBDFC501499594A581DB01C4AAF7/33885",width:"600",height:"400"}}),e._v(" "),o("h3",{attrs:{id:"二、docker-compose安装"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#二、docker-compose安装"}},[e._v("#")]),e._v(" 二、Docker Compose安装")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("在安装Docker Compose之前请确定已经安装了python-pip。\npython-pip安装教程请见此文\nhttps://blog.csdn.net/yulei_qq/article/details/52984334\n\n安装好pip之后，就可以安装Docker-Compose了.\n在linunx终端执行：pip install docker-compose.\n\n检查docker-compose是否安装成功：\n")])])]),o("p",[o("img",{attrs:{src:"https://note.youdao.com/yws/public/resource/0987e4f96f6b436ed52b85016f1c84f8/xmlnote/B2DB9061D02B442EB64E31E33287DEB8/33896",alt:""}})]),e._v(" "),o("h3",{attrs:{id:"三、mendix环境搭建"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#三、mendix环境搭建"}},[e._v("#")]),e._v(" 三、Mendix环境搭建")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("Mendix运行在docker中，其开源环境请见:https://github.com/mendix/docker-mendix-buildpack。\n")])])]),o("p",[o("img",{attrs:{src:"https://note.youdao.com/yws/public/resource/0987e4f96f6b436ed52b85016f1c84f8/xmlnote/4003B12DA0294FE6B5325338F928F218/33903",alt:""}}),e._v("\n开源地址的Readme.md文件有如下介绍：")]),e._v(" "),o("img",{attrs:{src:"https://note.youdao.com/yws/public/resource/0987e4f96f6b436ed52b85016f1c84f8/xmlnote/5C8F5B5FD9EB4C31BC354AE11F5C998D/33906",width:"500",height:"300"}}),e._v("\n    简单介绍：\nget-sample：得到一个Mendix应用程序，并将其解压到build目录下；\nbuid-image：创建Mendix运行，需要的镜像；\nrun-container：启动容器。\n"),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("1、请将您之前打包好的mda文件上传到服务器\nscp xxx.mda root@ip地址:/usr/local/mendix/app\n(xxx：自己的工程名；mendix/app是自己创建的目录)\n\n2、复制项目并切换目录\n    git clone https://github.com/mendix/docker-mendix-buildpack\ncd docker-mendix-buildpack\n\n3、将sample的apk替换成自己的apk\n")])])]),o("p",[o("img",{attrs:{src:"https://note.youdao.com/yws/public/resource/0987e4f96f6b436ed52b85016f1c84f8/xmlnote/7BD9499F9EEC482D9BEFB499E2AABE87/33916",alt:""}}),e._v("\n替换成：\n"),o("img",{attrs:{src:"https://note.youdao.com/yws/public/resource/0987e4f96f6b436ed52b85016f1c84f8/xmlnote/8C28E37E352443C9A1409AA56F95F80E/33919",width:"600",height:"400"}})]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("4、启动容器\n运行make run-container\n")])])]),o("p",[o("img",{attrs:{src:"https://note.youdao.com/yws/public/resource/0987e4f96f6b436ed52b85016f1c84f8/xmlnote/420443281B1946668EFEBF59997A2C6E/33965",alt:""}}),e._v("\n正常情况下容器会被启动，这样就可以通过url地址访问自己的应用程序。但是在启动时总会遇到各种问题。")]),e._v(" "),o("h3",{attrs:{id:"四、启动成功"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#四、启动成功"}},[e._v("#")]),e._v(" 四、启动成功")]),e._v(" "),o("img",{attrs:{src:"https://note.youdao.com/yws/public/resource/0987e4f96f6b436ed52b85016f1c84f8/xmlnote/121EB0D2F0ED4AC5A5FECE0B1DD4EB8B/33970",width:"600",height:"400"}}),e._v(" "),o("h3",{attrs:{id:"五、mendix后台环境搭建注意事项"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#五、mendix后台环境搭建注意事项"}},[e._v("#")]),e._v(" 五、Mendix后台环境搭建注意事项")]),e._v(" "),o("p",[e._v("1、端口是否已被占用\n由于在配置文件中配置了docker的8080映射到服务器的80端口，以及8090映射到81端口；所以请确认服务器的这两个端口是否已被占用（如果已经被占用：可修改此处的配置文件）\n"),o("img",{attrs:{src:"https://note.youdao.com/yws/public/resource/0987e4f96f6b436ed52b85016f1c84f8/xmlnote/46ECE91F8DAD400F959D041A280D5BB7/33928",width:"600",height:"400"}})]),e._v(" "),o("p",[e._v("如果修改成其他的端口，请记修改Dockerfile配置文件中的nginx端口：否则程序不会允许\n"),o("img",{attrs:{src:"https://note.youdao.com/yws/public/resource/0987e4f96f6b436ed52b85016f1c84f8/xmlnote/52B4C799667D44EA84BB4842E4C6CE5E/33933",width:"600",height:"400"}})]),e._v(" "),o("p",[e._v("3、登录时为何使用Administor无法登录\nmendix客户端的administor账户是在测试环境使用的；\n"),o("img",{attrs:{src:"https://note.youdao.com/yws/public/resource/0987e4f96f6b436ed52b85016f1c84f8/xmlnote/WEBRESOURCEa576049bb39f79bd36e779c46a55a82c/33994",width:"600",height:"400"}})]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("如果程序发布到服务器，\n则需要登录的账户为：MxAdmin\n密码为：docker-compose-mysql中的ADMIN_PASSWORD字段\n")])])]),o("img",{attrs:{src:"https://note.youdao.com/yws/public/resource/0987e4f96f6b436ed52b85016f1c84f8/xmlnote/380AC56B7D7D47488CF173C32CA431CE/33943",width:"600",height:"400"}}),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("4、docker-compose-mysql字段简要介绍\nmendixapp:\n    image:为docker镜像；\n    ADMIN_PASSWORLD:使用MxAdmin账户登录系统的密码；\n    DATABASE_ENDPOINT：应用的数据库地址，最后一个mendix为创建的mendix数据库；\n    ports：docker端口和服务器端口的映射关系，如果服务器的端口已被占用，则需要修改映射的端口；\n\ndb：\n    MYSQL_DATABASE=mendix   //mendix数据库名\n    MYSQL_USER：mendix数据库的用户\n    MYSQL_PASSWORD：mendix数据库的密码\n    MYSQL_ROOT_PASSWORD=root  //数据库最高权限密码（当然账号也为root）\n    ports：docker中数据库端口和服务器端口的映射关系。\n\n5、访问地址为何过总是报错502\n")])])]),o("p",[o("img",{attrs:{src:"https://note.youdao.com/yws/public/resource/0987e4f96f6b436ed52b85016f1c84f8/xmlnote/30D1D8431E6447B2BA608D3CE0BE892C/33975",alt:""}}),e._v("\n哪些情况出现502:\n访问次数过多；\n3个小时左右会自动停止；\n之所以一直报错502的最根本原因是没有向Mendix购买license；没有license 最多只能在线10个用户，且系统每隔3小时左右关闭。所以需要向Mendix购买License。\n停止了，可重启容器\n"),o("img",{attrs:{src:"https://note.youdao.com/yws/public/resource/0987e4f96f6b436ed52b85016f1c84f8/xmlnote/5CB2EA5BE3CF415DA861F22FEE10DC87/35306",alt:""}})]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("    重新部署包，则需要先关闭mysql容器，再使用make run-container。\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);