(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{411:function(n,s,t){"use strict";t.r(s);var a=t(1),e=Object(a.a)({},(function(){var n=this,s=n.$createElement,t=n._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"一些常用的-linux-命令汇总"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一些常用的-linux-命令汇总","aria-hidden":"true"}},[n._v("#")]),n._v(" 一些常用的 linux 命令汇总")]),n._v(" "),t("h2",{attrs:{id:"centos-安装-nginx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#centos-安装-nginx","aria-hidden":"true"}},[n._v("#")]),n._v(" Centos 安装 nginx")]),n._v(" "),t("ol",[t("li",[n._v("安装 Nginx\nyum 安装 nginx 非常简单，就输入一条命令即可。")])]),n._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[n._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("sudo")]),n._v(" yum -y "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("install")]),n._v(" nginx   "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 安装 nginx")]),n._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("sudo")]),n._v(" yum remove nginx  "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 卸载 nginx")]),n._v("\n")])])]),t("p",[n._v("使用 yum 进行 Nginx 安装时，Nginx 配置文件在 "),t("code",[n._v("/etc/nginx")]),n._v(" 目录下。")]),n._v(" "),t("p",[t("strong",[n._v("默认路径")])]),n._v(" "),t("ul",[t("li",[n._v("Nginx 配置路径："),t("code",[n._v("/etc/nginx/")])]),n._v(" "),t("li",[n._v("PID 目录："),t("code",[n._v("/var/run/nginx.pid")])]),n._v(" "),t("li",[n._v("错误日志："),t("code",[n._v("/var/log/nginx/error.log")])]),n._v(" "),t("li",[n._v("访问日志："),t("code",[n._v("/var/log/nginx/access.log")])]),n._v(" "),t("li",[n._v("默认站点目录："),t("code",[n._v("/usr/share/nginx/html")])])]),n._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[n._v("配置 Nginx 服务")])]),n._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[n._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("sudo")]),n._v(" systemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[n._v("enable")]),n._v(" nginx "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 设置开机启动")]),n._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("sudo")]),n._v(" systemctl disable nginx "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 禁止开机启动")]),n._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("sudo")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("service")]),n._v(" nginx start "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 启动 nginx 服务")]),n._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("sudo")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("service")]),n._v(" nginx stop "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 停止 nginx 服务")]),n._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("sudo")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("service")]),n._v(" nginx restart "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 重启 nginx 服务")]),n._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("sudo")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("service")]),n._v(" nginx reload "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 重新加载配置，一般是在修改过 nginx 配置文件时使用。")]),n._v("\n")])])]),t("h2",{attrs:{id:"centos-安装-docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#centos-安装-docker","aria-hidden":"true"}},[n._v("#")]),n._v(" Centos 安装 docker")]),n._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 安装最新版node")]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("curl")]),n._v(" --silent --location https://rpm.nodesource.com/setup_10.x "),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("|")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("sudo")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("bash")]),n._v("\nyum -y "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("install")]),n._v(" nodejs\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 安装docer")]),n._v("\nyum -y "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("install")]),n._v(" docker\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 查看docker版本")]),n._v("\ndocker version\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 启动docker服务")]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("service")]),n._v(" docker start\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 列出docker的image")]),n._v("\ndocker image "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("ls")]),n._v("\n")])])]),t("h2",{attrs:{id:"docker-安装-nginx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-安装-nginx","aria-hidden":"true"}},[n._v("#")]),n._v(" docker 安装 nginx")]),n._v(" "),t("p",[t("a",{attrs:{href:"https://www.jianshu.com/p/6b038165d591",target:"_blank",rel:"noopener noreferrer"}},[n._v("【参考】"),t("OutboundLink")],1)]),n._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[n._v("docker pull nginx\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#使用命令查看拉取到的镜像")]),n._v("\ndocker images\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#  运行Nginx镜像")]),n._v("\ndocker run -d -p "),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("80")]),n._v(":80 --name nginx nginx\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 运行上面的命令就可以使用ip地址进行访问了")]),n._v("\n")])])]),t("p",[t("strong",[n._v("参数说明")])]),n._v(" "),t("ul",[t("li",[n._v("-d 以守护模式运行镜像，也就是后台运行")]),n._v(" "),t("li",[n._v("-p 宿主机端口映射的镜像端口，左边是宿主机端口，右边是镜像端口，80 是 Nginx 访问端口")]),n._v(" "),t("li",[n._v("--name 给容器起一个唯一的别名")])]),n._v(" "),t("h3",{attrs:{id:"配置-nginx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置-nginx","aria-hidden":"true"}},[n._v("#")]),n._v(" 配置 Nginx")]),n._v(" "),t("ul",[t("li",[n._v("我们首先需要在宿主机创建用于存放 nginx 日志、配置文件和相关静态资源的目录，并将其挂载到容器内对应路径。")]),n._v(" "),t("li",[n._v("后续更新我们只需要更改宿主机目录下的配置文件或者静态文件就可以更新容器内资源，这样可以确保容器挂掉只需要重新启动一个容器挂载上数据去就完美无缺的还原，这也是容器轻量快速方便的原因。不只是 nginx 容器，其余的像 mysql 容器也一定要记得挂载/data 数据文件，防止容器宕掉丢失数据。")])]),n._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[n._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("mkdir")]),n._v(" -p /home/service/nginx/log\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("mkdir")]),n._v(" -p /home/service/nginx/conf\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("mkdir")]),n._v(" -p /home/service/nginx/conf.d\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("mkdir")]),n._v(" -p /home/service/nginx/static\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("mkdir")]),n._v(" -p /home/service/nginx/ssl\n\n")])])]),t("p",[n._v("然后从 Nginx 容器中复制一份配置文件到宿主机刚刚创建的 conf 目录")]),n._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 复制配置文件")]),n._v("\ndocker "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("cp")]),n._v(" nginx:/etc/nginx/nginx.conf /home/service/nginx/conf/nginx.conf\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 由于nginx.conf文件中依赖了/etc/nginx/conf.d/，所以也需要将其复制出来")]),n._v("\ndocker "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("cp")]),n._v(" nginx:/etc/nginx/conf.d/default.conf /home/service/nginx/conf.d/default.conf\n\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 还记得我们前面访问nginx的时候那个页面吗？是的，那个页面也要复制到宿主机;/home/service/nginx/static/index.html就是我们的首页")]),n._v("\n\ndocker "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("cp")]),n._v(" nginx:/usr/share/nginx/html/index.html /home/service/nginx/static/index.html\n\n")])])]),t("p",[t("strong",[n._v("修改 nginx.conf 配置文件")])]),n._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[n._v("user  nginx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\nworker_processes  "),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\nerror_log  /var/log/nginx/error.log warn"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\npid        /var/run/nginx.pid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\nworker_rlimit_nofile "),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("65535")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n\nevents "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n    use epoll"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n    worker_connections "),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("65535")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n\n\nhttp "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n    include /etc/nginx/mime.types"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n    default_type application/octet-stream"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n    charset utf-8"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n    keepalive_timeout "),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("60")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n    log_format  main  "),t("span",{pre:!0,attrs:{class:"token string"}},[n._v("'"),t("span",{pre:!0,attrs:{class:"token variable"}},[n._v("$remote_addr")]),n._v(" - "),t("span",{pre:!0,attrs:{class:"token variable"}},[n._v("$remote_user")]),n._v(" ["),t("span",{pre:!0,attrs:{class:"token variable"}},[n._v("$time_local")]),n._v('] "'),t("span",{pre:!0,attrs:{class:"token variable"}},[n._v("$request")]),n._v("\" '")]),n._v("\n                      "),t("span",{pre:!0,attrs:{class:"token string"}},[n._v("'"),t("span",{pre:!0,attrs:{class:"token variable"}},[n._v("$status")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[n._v("$body_bytes_sent")]),n._v(' "'),t("span",{pre:!0,attrs:{class:"token variable"}},[n._v("$http_referer")]),n._v("\" '")]),n._v("\n                      "),t("span",{pre:!0,attrs:{class:"token string"}},[n._v("'\""),t("span",{pre:!0,attrs:{class:"token variable"}},[n._v("$http_user_agent")]),n._v('" "'),t("span",{pre:!0,attrs:{class:"token variable"}},[n._v("$http_x_forwarded_for")]),n._v("\"'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n    access_log  /var/log/nginx/access.log  main"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n    server "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n        listen "),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("80")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n        server_name  www.roes.top"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n        location / "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n            root   /usr/share/nginx/html"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n            index  index.html index.htm"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n    include /etc/nginx/conf.d/*.conf"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n\n\n")])])]),t("p",[n._v("停止上次的 nginx 容器并删除容器")]),n._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[n._v("docker stop nginx\ndocker "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("rm")]),n._v(" nginx\n")])])]),t("p",[t("strong",[n._v("重新启动一个镜像")])]),n._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# -v的意思就是把宿主机目录挂载到冒号后面的容器目录")]),n._v("\n\ndocker run -p "),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("443")]),n._v(":443 -p "),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("80")]),n._v(":80 --name nginx "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("\\")]),n._v("\n    -v /home/service/nginx/static:/usr/share/nginx/html  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("\\")]),n._v("\n    -v /home/service/nginx/conf/nginx.conf:/etc/nginx/nginx.conf "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("\\")]),n._v("\n    -v /home/service/nginx/log:/var/log/nginx  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("\\")]),n._v("\n    -v /home/service/nginx/conf.d:/etc/nginx/conf.d "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("\\")]),n._v("\n    -v /home/service/nginx/ssl:/ssl "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("\\")]),n._v("\n    -d nginx\n")])])]),t("p",[t("strong",[n._v("如果有 https,则修改 nginx.conf")])]),n._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[n._v("user  nginx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\nworker_processes  "),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\nerror_log  /var/log/nginx/error.log warn"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\npid        /var/run/nginx.pid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\nworker_rlimit_nofile "),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("65535")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n\nevents "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n    use epoll"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n    worker_connections "),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("65535")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n\n\nhttp "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n    include /etc/nginx/mime.types"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n    default_type application/octet-stream"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n    charset utf-8"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n    server_names_hash_bucket_size "),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("128")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n    client_header_buffer_size 2k"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n    large_client_header_buffers "),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("4")]),n._v(" 4k"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n    client_max_body_size 8m"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n    sendfile on"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n    tcp_nopush on"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n    keepalive_timeout "),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("60")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n    open_file_cache "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[n._v("max")]),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("204800")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[n._v("inactive")]),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),n._v("20s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n    open_file_cache_min_uses "),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n    open_file_cache_valid 30s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n    tcp_nodelay on"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("gzip")]),n._v(" on"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n    gzip_min_length 1k"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n    gzip_buffers "),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("4")]),n._v(" 16k"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n    gzip_http_version "),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("1.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n    gzip_comp_level "),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n    gzip_types text/plain application/x-javascript text/css application/xml"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n    gzip_vary on"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n    log_format  main  "),t("span",{pre:!0,attrs:{class:"token string"}},[n._v("'"),t("span",{pre:!0,attrs:{class:"token variable"}},[n._v("$remote_addr")]),n._v(" - "),t("span",{pre:!0,attrs:{class:"token variable"}},[n._v("$remote_user")]),n._v(" ["),t("span",{pre:!0,attrs:{class:"token variable"}},[n._v("$time_local")]),n._v('] "'),t("span",{pre:!0,attrs:{class:"token variable"}},[n._v("$request")]),n._v("\" '")]),n._v("\n                      "),t("span",{pre:!0,attrs:{class:"token string"}},[n._v("'"),t("span",{pre:!0,attrs:{class:"token variable"}},[n._v("$status")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[n._v("$body_bytes_sent")]),n._v(' "'),t("span",{pre:!0,attrs:{class:"token variable"}},[n._v("$http_referer")]),n._v("\" '")]),n._v("\n                      "),t("span",{pre:!0,attrs:{class:"token string"}},[n._v("'\""),t("span",{pre:!0,attrs:{class:"token variable"}},[n._v("$http_user_agent")]),n._v('" "'),t("span",{pre:!0,attrs:{class:"token variable"}},[n._v("$http_x_forwarded_for")]),n._v("\"'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n    access_log  /var/log/nginx/access.log  main"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n    server "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n        listen  "),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("80")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n        server_name   www.example.com "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n        rewrite ^"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),n._v(".*"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v("$  https://"),t("span",{pre:!0,attrs:{class:"token variable"}},[n._v("$host")]),t("span",{pre:!0,attrs:{class:"token variable"}},[n._v("$1")]),n._v(" permanent"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n    server "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#监听的端口号")]),n._v("\n        listen  "),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("443")]),n._v(" ssl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n        server_name  www.example.com "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n        ssl_certificate      /ssl/1492507_www.example.com.pem"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 换成自己的地址")]),n._v("\n        ssl_certificate_key  /ssl/1492507_www.example.com.key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 换成自己的地址")]),n._v("\n        ssl_session_cache    shared:SSL:1m"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n        ssl_session_timeout  5m"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n        ssl_ciphers  HIGH:"),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("!")]),n._v("aNULL:"),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("!")]),n._v("MD5"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n        ssl_prefer_server_ciphers  on"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n        location / "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n            root   /usr/share/nginx/html"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n            index  index.html index.htm"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n    include /etc/nginx/conf.d/*.conf"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n\n")])])]),t("p",[n._v("更改完成，重启容器")]),n._v(" "),t("blockquote",[t("p",[n._v("注意：这里更新的是宿主机上的 nginx.conf")])]),n._v(" "),t("blockquote",[t("p",[n._v("然后进入容器重启 nginx 即可\n也可以不用进入容器重启，直接重启容器也可以\n"),t("code",[n._v("docker restart nginx")])])]),n._v(" "),t("p",[n._v("或者:")]),n._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[n._v("docker "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[n._v("exec")]),n._v(" -it nginx /bin/bash\nnginx -s reload\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);