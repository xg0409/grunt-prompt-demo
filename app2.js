var express = require('express');
var logger = require('morgan');
var path = require('path');
var favicon = require('serve-favicon');
var app = express();

app.use(logger('dev'));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static(__dirname + '/public'));

app.set('view engine','ejs');
app.set('views', __dirname + '/views');

app.param(function(name, fn){
    console.log(name,fn)
    if (fn instanceof RegExp) {
        return function(req, res, next, val){
            var captures;
            if (captures = fn.exec(String(val))) {
                req.params[name] = captures;
                next();
            } else {
                next('route');
            }
        }
    }
});

app.param('id', /^\d+$/);

app.get('/user/:id', function(req, res){
    res.send('user ' + req.params.id);
});

app.param('range', /^(\w+)\.\.(\w+)?$/);

app.get('/range/:range', function(req, res){
    var range = req.params.range;
    res.send('from ' + range[1] + ' to ' + range[2]);
});

app.listen(9009);
console.log('http://192.168.154.130:82/');
