var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  /**
   * res.render(file,option)是express中专门渲染视图用的，
   *   首先你要在你的app.js或者index.js中设置一下渲染引擎，
   *   比如html,jade,handlebars(我自己使用的)，mustache等。
   *   然后将视图模板的文件位置放入file,将传入的模板数据放入option对象中，
   *   模板引擎就能自己渲染出视图。给你推荐一个npm模块，express-handlebars，
   *   能很快搭建一个项目，你实践过，就能明白res.render.
   * @type {String}
   */
  res.render('index', {
    title: 'Express',
    layout: 'layout'
  });
});

module.exports = router;
