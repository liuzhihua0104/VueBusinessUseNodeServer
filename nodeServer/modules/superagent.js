let superagent = require("superagent");

// 封装的nodejs请求其他服务器,query可以不传所以放到最后
module.exports._superagentGet = function (url, callback, query = {}, ) {
  superagent
    .get(url) //这里的URL也可以是绝对路径
    .query(query) // 这里是query传参：？id=1这种
    .end(function (req, res) {
      //do something
      // console.log(req);
      // console.log(res.text.message)

      if (res && res.text) {
        let data = JSON.parse(res.text);
        if (data.message) {
          callback(data.message);
        }
      }

    })
}