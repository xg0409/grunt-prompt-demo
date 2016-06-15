var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
var favicon = require('serve-favicon');
//morgan在控制台中，显示req请求的信息
var morgan = require('morgan');
var hbs = require('hbs');
var port = process.env.PORT || "9999";

var logDirectory = __dirname + '/logs'

// ensure log directory exists
var FileStreamRotator = require('file-stream-rotator')
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)
var accessLogStream = FileStreamRotator.getStream({
  date_format: 'YYYYMMDD',
  filename: logDirectory + '/access-%DATE%.log',
  frequency: 'daily',
  verbose: false
});
app.use(morgan('combined', { stream: accessLogStream }))


var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var partials = require('express-partials');
var routes = require('./routes/index');
var usersRoute = require('./routes/users');
var blogService = require('./routes/blogService.js');
var moment = require('moment');
//console.log(moment(1437925575663).format('YYYY-MM-DD HH:mm:ss'));
var logger = require("./log4j.js");
logger.info("哈哈1开始记录日志cccc");
logger.error("出错了，你怎么搞的");


require('./routes/helpers')(app);
//__dirname变量获取当前模块文件所在目录的完整绝对路径
// 视图引擎设置
app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');
// app.use(partials());
app.set('view engine', 'html');
//app.engine('html', swig.renderFile);
app.engine('html', require('hbs').__express);
hbs.registerPartials(__dirname + '/views/hbs');


app.use(express.static(path.join(__dirname, 'public')));
// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.param('user', function(req, res, next, id) {
  User.find(id, function(err, user) {
    if (err) {
      next(err);
    } else if (user) {
      req.user = user;
      next();
    } else {
      next(new Error('failed to load user'));
    }
  });
});

// app.use('/', routes);
// app.use('/users/:username', usersRoute.getUserName);
// app.use('/users', usersRoute.index);

app.get('/', blogService.index);
app.get('/u/:user', blogService.user);
app.post('/post', blogService.post);

app.get('/reg', blogService.reg);
app.post('/reg', blogService.doReg);
app.get('/login', blogService.login);
app.post('/login', blogService.doLogin);
app.get('/logout', blogService.logout);
app.post('/submitLogin', blogService.submitLogin);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


var server = app.listen(port, function() {
  console.log('Listening on port %d', server.address().port);
});



//module.exports = app;
exports.logger = function(name) {
  var logger = log4js.getLogger(name);
  logger.setLevel('INFO');
  return logger;
}
