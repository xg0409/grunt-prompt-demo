var logger = require("../log4j.js");

var blogService = {
  index: function(req, res, next) {
    console.log(req.body)
    res.render('hbs/index', {
      title: 'Express-XG',
      items:[{
        name:'item1',
        age:20
      },{
        name:'item2',
        age:30
      },{
        name:'item3',
        age:40
      },{
        name:'item4',
        age:50
      }]
      // layout: 'layout'
    });
  },
  user: function(req, res, next) {
    res.send({
      code: '0000',
      message: '',
      data: null
    });
  },
  post: function(req, res, next) {
    res.send({
      code: '0000',
      message: '',
      data: null
    });
  },
  reg: function(req, res, next) {
    res.render('reg', {
      title: '注册'
      // layout: 'layout'
    });
  },
  doReg: function(req, res, next) {
    res.send({
      code: '0000',
      message: '',
      data: null
    });
  },
  login: function(req, res, next) {
    res.render('login',{
      title:'登陆'
    });
  },
  doLogin: function(req, res, next) {
    res.send({
      code: '0000',
      message: '',
      data: null
    });
  },
  logout: function(req, res, next) {
    res.send({
      code: '0000',
      message: '',
      data: null
    });
  },
  submitLogin:function(req,res,next){
    var username = req.body.username;
    throw new Error('An error for test purposes.');
    logger.error('An error for test purposes');
    console.log("username",username);
    res.render('index',{
      title:'Express'
    })
  }
};


module.exports = blogService;
