let express = require("express");
let app = new express();
let DbFn = require("./modules/db.js")
let superagentFn = require("./modules/superagent.js"); //引入封装好的superagentFn

// 后端解决跨域的部分
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});


// 获取轮播图
app.get("/api/getlunbo", function (req, res) {

  DbFn._find("home_img", {}, function (data) {
    if (data.length == 0) {
      superagentFn._superagentGet("http://www.liulongbin.top:3005/api/getlunbo", function (resultData) {
        DbFn._insertMany("home_img", resultData, function (result) {
          // 插入成功后的回调
          res.json({
            code: 200,
            data: resultData,
            msg: "新闻详情获取成功"
          })
        })

      })

    } else {
      console.log("有找到轮播图数据");
      res.json({
        code: 200,
        data,
        msg: "ok"
      })
    }
  })
})


// 获取新闻列表
app.get("/api/getnewslist", function (req, res) {
  DbFn._find("newlist", {}, function (data) {
    if (data.length == 0) {
      var superagent = require('superagent');
      // 查询本机ip，这里需要根据实际情况选择get还是post
      var sreq = superagent.get('http://www.liulongbin.top:3005/api/getnewslist');
      sreq.end((err, poxRes) => {
        let obj = JSON.parse(poxRes.text);
        DbFn._insertMany("newlist", obj.message, function (insertResult) {
          if (insertResult.result.ok && insertResult.result.n) {
            console.log("数据插入成功")
            res.json({
              code: 200,
              data: insertResult.ops,
              message: "新闻列表获取成功"
            })
          }
        })

      })
    } else {
      res.json({
        code: 200,
        data: data,
        message: "新闻列表获取成功"
      })
    }
  })

})

// 获取新闻详情
app.get("/api/getnew/:id", function (req, res) {
  let id = req.params.id;
  // 注意获取到的id是string类型的，而数据库中是number类型的，必须保持一致，否则查找不到数据
  let options = { "id": Number(id) }
  DbFn._find("new_detail", options, function (data) {
    // console.log(data)
    //  说明没有查找到数据，就去别的服务器请求，然后放到我自己的数据库中
    if (!data || data.length == 0) {
      // 去别的服务器请求
      superagentFn._superagentGet("http://www.liulongbin.top:3005/api/getnew/" + id, function (arr) {
        // 插入自己的数据库
        DbFn._insertMany("new_detail", arr, function (result) {
          // 插入成功后的回调
          res.json({
            code: 200,
            data: arr,
            msg: "新闻详情获取成功"
          })
        })
      })
    } else {
      console.log("有找到数据")
      // console.log(data)
      // 说明有数据直接返回，不需要去别的服务器请求
      res.json({
        code: 200,
        data,
        msg: "获取图片列表成功！"
      })
    }

  })

  return






})


app.listen(9999, "localhost")
