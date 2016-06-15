// var express = require('express');
// var router = express.Router();

//  GET users listing.
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

/**
 * 1.Express 提供了路由控制权转移的方法,即回调函数的第三个参数next,通过调用 next(),会将路由控制权转移给后面的规则
 * 2.next方法如果接受了参数,即代表发生了错误
 **/
var router = {
  index: function(req, res, next) {
    res.send({
      code: '0000',
      message: '',
      data: null
    });
    // console.log("users.index");
    // next(new Error(req.params.username + ' does not exist.'));
  },
  //http://localhost:3000/users/xugang
  getUserName: function(req, res, next) {
    res.send({
      code: '0000',
      message: req.params.username,
      data: null
    });
  }
};


module.exports = router;
