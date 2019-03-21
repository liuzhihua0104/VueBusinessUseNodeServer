##此项目是我自己开发的vue+node

根目录下有两个文件夹
nodeServer为后端服务地址
项目中跨域是node后端解决的

前端vue 项目部分
1、如果全局中没有安装vue-cli 请运行 npm install -g vue-cli
2、执行 npm install 安装依赖 
3、npm run dev 运行开发环境
4、npm run build 构建项目


后端node部分
1、执行 npm install 安装依赖
2、如果全局中没有安装nodemon请运行 npm install -g nodemon
3、app.listen(9999, "192.168.40.192"),node中监听的地址 "192.168.40.192" 请使用本机的 powershell 运行 ipconfig 拿到 "ipv4" 对应的地址
4、前端 vue 请求地址和node监听地址全部改为前面的ipv4地址
