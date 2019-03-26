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


// // 使用mongodb
// let MongoClient = require("mongodb").MongoClient;
// let dbUrl = "mongodb://localhost:27017";

// app.get("/api/getlunbo", function (req, res) {
//   MongoClient.connect(dbUrl, { useNewUrlParser: true }, function (err, db) {
//     if (err) {
//       res.json({
//         code: 200,
//         msg: "连接数据库失败"
//       })
//       return
//     }
//     // 连接数据库成功，从数据库查找数据
//     let targetDb = db.db("vuebuspro"); // 目标数据库
//     let result = targetDb.collection("home_img").find()  //去home_img集合中查找所有数据
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
//     db.close();
//     console.log("close finish")
//   })

// })




// 使用mongodb
let MongoClient = require("mongodb").MongoClient;
let dbUrl = "mongodb://localhost:27017";
// let dbUrl="mongodb://liuzhihuarose@126.com:13910830226AAAAA!@ds121996.mlab.com:21996/rosemlabdate";



// 先连接数据库
MongoClient.connect(dbUrl, { useNewUrlParser: true }, function (err, db) {
  if (err) {
    res.json({
      code: 200,
      msg: "连接数据库失败"
    })
    return
  }
  // db.close();
  console.log("连接正常")
  app.get("/api/getlunbo", function (req, res) {
    // 连接数据库成功，从数据库查找数据
    let targetDb = db.db("vuebuspro"); // 目标数据库
    // let targetDb = db.db("rosemlabdate"); // 目标数据库
    let result = targetDb.collection("home_img").find() //去home_img集合中查找所有数据
    result.toArray(function (err, data) {
      if (err) {
        res.json({
          code: 200,
          msg: "读取数据失败"
        })
        return
      }
      res.json({
        code: 200,
        message: data,
        msg: "获取图片成功"
      })
    })
  })

})


app.listen(9999, "localhost")

// "192.168.40.192" 为本机的ipv4编码
// app.listen(9999,"localhost")

// http://192.168.40.192:9999/api/getlunbo