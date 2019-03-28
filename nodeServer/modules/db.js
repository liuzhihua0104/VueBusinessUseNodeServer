// 使用mongodb
let MongoClient = require("mongodb").MongoClient;
let dbUrl = "mongodb://localhost:27017";


// 这一步只负责链接数据库
function _connect(callback) {
  MongoClient.connect(dbUrl, { useNewUrlParser: true }, function (err, db) {
    if (err) {
      res.json({
        code: 200,
        msg: "链接数据库失败！"
      })
      return
    }
    callback(db);//执行回调，抛出db
    db.close(); //关闭数据库
  })

}



/**
 * 查找一条数据
 * @param {*} dbName 数据库名字
 * @param {*} collectionName 集合名字
 * @param {*} options 查找的条件
 * @param {*} callback 回调
 */

module.exports._find = function (dbName, collectionName, options, callback) {
  _connect(function (db) {
    let targetDb = db.db(dbName);
    let result = targetDb.collection(collectionName).find(options);
    result.toArray(function (err, data) {
      if (err) {
        res.json({
          code: 200,
          msg: "读取数据失败"
        })
        return
      }
      callback(data)
    })
  })
}




