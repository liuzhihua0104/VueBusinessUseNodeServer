let express = require("express");
let app = new express();

// 后端解决跨域的部分
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});


app.get("/api/getlunbo", function (req, res) {
  res.json({ "status": 0, "message": [{ "id": 1, "url": "http://www.itcast.cn/subject/phoneweb/index.html", "img": "http://www.itcast.cn/subject/webzly/images/1.jpg" }, { "id": 2, "url": "http://www.itcast.cn/subject/phoneweb/index.html", "img": "http://www.itcast.cn/subject/webzly/images/1.2.jpg" }, { "id": 3, "url": "http://www.itcast.cn/subject/phoneweb/index.html", "img": "http://www.itcast.cn/images/newslide/homepageandphone/20185609105606277.jpg" }] })
})



app.listen(9999, "192.168.40.192")

// "192.168.40.192" 为本机的ipv4编码
// app.listen(9999,"localhost")

// http://192.168.40.192:9999/api/getlunbo