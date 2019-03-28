let express = require("express");
let app = new express();

let DbFn = require("./modules/db.js")

console.log(DbFn)

// 后端解决跨域的部分
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});


// 使用mongodb
let MongoClient = require("mongodb").MongoClient;
let dbUrl = "mongodb://localhost:27017";
// let dbUrl="mongodb://liuzhihuarose@126.com:13910830226AAAAA!@ds121996.mlab.com:21996/rosemlabdate";

// 先连接数据库
// MongoClient.connect(dbUrl, { useNewUrlParser: true }, function (err, db) {
//   if (err) {
//     res.json({
//       code: 200,
//       msg: "连接数据库失败"
//     })
//     return
//   }
//   // db.close();
//   console.log("连接正常")
//   // 首页获取轮播图
//   app.get("/api/getlunbo", function (req, res) {
//     // 连接数据库成功，从数据库查找数据
//     let targetDb = db.db("vuebuspro"); // 目标数据库
//     // let targetDb = db.db("rosemlabdate"); // 目标数据库
//     let result = targetDb.collection("home_img").find() //去home_img集合中查找所有数据
//     result.toArray(function (err, data) {
//       if (err) {
//         res.json({
//           code: 200,
//           msg: "读取数据失败"
//         })
//         return
//       }
//       res.json({
//         code: 200,
//         message: data,
//         msg: "获取图片成功"
//       })
//     })
//   })

// 新闻列表
// app.get("/api/getnewslist", function (req, res) {
//   let targetDb = db.db("vuebuspro"); // 目标数据库
//   let result = targetDb.collection("newlist").find() //去newlist集合中查找所有数据，如果没有应该会自动创建
//   result.toArray(function (err, data) {
//     if (err) {
//       res.json({
//         code: 200,
//         msg: "读取数据失败"
//       })
//     }

//     // 如果没有数据就去别的服务器请求数据插入到数据库中
//     if (data.length == 0) {
//       // 使用了superagent来发起请求
//       var superagent = require('superagent');
//       // 查询本机ip，这里需要根据实际情况选择get还是post
//       var sreq = superagent.get('http://www.liulongbin.top:3005/api/getnewslist');
//       sreq.end((err, poxRes) => {
//         let result = JSON.parse(poxRes.text);

//         // 插入到数据库中
//         let targetDb = db.db("vuebuspro"); // 目标数据库
//         let targetCollection = targetDb.collection("newlist");
//         targetCollection.insertMany(result.message).then(function (obj) {
//           // obj.result.n代表插入数据的条数
//           if (obj.result.ok && obj.result.n) {
//             console.log("数据插入成功")
//           }

//         })

//         // 成功后将数据返回给前端
//         res.json({
//           code: 200,
//           data: result.message,
//           message: "新闻列表获取成功"
//         })
//       })
//     } else {
//       // 从数据库中查到了数据直接返回给前端、
//       res.json({
//         code: 200,
//         data: data,
//         message: "新闻列表获取成功"
//       })
//     }
//   })
// })
// })


// 获取轮播图
app.get("/api/getlunbo", function (req, res) {
  DbFn._find("vuebuspro", "home_img", {}, function (data) {
    res.json({
      code: 200,
      data,
      msg: "获取图片列表成功！"
    })

  })
})

// 获取新闻列表

app.get("/api/getnewslist", function (req, res) {
  DbFn._find("vuebuspro", "newlist", {}, function (data) {
    if (data.length == 0) {
      var superagent = require('superagent');
      // 查询本机ip，这里需要根据实际情况选择get还是post
      var sreq = superagent.get('http://www.liulongbin.top:3005/api/getnewslist');
      sreq.end((err, poxRes) => {
        let result = JSON.parse(poxRes.text);
        console.log(result)

        // 插入到数据库中
        // let targetDb = db.db("vuebuspro"); // 目标数据库
        // let targetCollection = targetDb.collection("newlist");
        // targetCollection.insertMany(result.message).then(function (obj) {
        //   // obj.result.n代表插入数据的条数
        //   if (obj.result.ok && obj.result.n) {
        //     console.log("数据插入成功")
        //   }

        // })

        // // 成功后将数据返回给前端
        // res.json({
        //   code: 200,
        //   data: result.message,
        //   message: "新闻列表获取成功"
        // })
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


app.listen(9999, "localhost")
