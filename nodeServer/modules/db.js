// 使用mongodb
let MongoClient = require("mongodb").MongoClient;
let dbUrl = "mongodb://localhost:27017"; //数据库的地址
let dbName = "vuebuspro"; //数据库的名称


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
 * @param {*} collectionName 集合名字
 * @param {*} options 查找的条件
 * @param {*} callback 回调
 */

module.exports._find = function (collectionName, options, callback) {
  _connect(function (db) {
    let targetDb = db.db(dbName); //数据库名称，上面声明了
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

/**
 * @param {*} collectionName 集合名字
 * @param {*} arr 要插入到数据库中的数组数据
 * @param {*} callback 回调
 */
module.exports._insertMany = function (collectionName, arr, callback) {
  _connect(function (db) {
    let targetDb = db.db(dbName); //数据库名称，上面声明了
    let targetCollection = targetDb.collection(collectionName);
    targetCollection.insertMany(arr).then(function (result) {
      callback(result);//把插入的结果返回出去
    })
  })
}


/**
 * @param {*} collectionName 集合名字
 * @param {*} options  查找的条件
 * @param {*} callback 回调
 */
module.exports._findOne = function (collectionName, options, callback) {
  _connect(function(db){
    let targetDb=db.db(dbName);
    let targetCollection=targetDb.collection(collectionName);
    targetCollection.findOne()
  })

}





