# 此项目是我自己开发的vue+node

## 根目录下有两个文件夹
## nodeServer为后端服务地址
## 项目中跨域是node后端解决的

### 前端vue 项目部分
#### 1、如果全局中没有安装vue-cli 请运行 npm install -g vue-cli
#### 2、执行 npm install 安装依赖 
#### 3、npm run dev 运行开发环境
#### 4、npm run build 构建项目


### 后端node部分
#### 1、执行 npm install 安装依赖
#### 2、如果全局中没有安装nodemon请运行 npm install -g nodemon
#### 3、app.listen(9999, "192.168.40.192"),node中监听的地址 "192.168.40.192" 请使用本机的 powershell 运行 ipconfig 拿到"ipv4" 对应的地址
#### 4、前端 vue 请求地址和node监听地址全部改为前面的ipv4地址


### 如果想把项目放到手机上运行
#### 在vue项目的config/index.js中修改host为自己电脑的ip地址：通过ipconfig 获取 ipv4 地址
#### 然后就重新运行一下vue项目，便可以通过http://ip地址:8080/来访问。例如你的ip地址为192.176.56.87，你就可以在浏览器中输入http://192.176.56.87:8080/来访问vue项目了
#### 如果想在手机上的浏览器访问，就要保证手机和电脑是在用一个局域网下面。可以通过修改wifi的代理来达到这一效果。

