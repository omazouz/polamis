var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ejs = require('ejs');
const JwtUtil = require('./public/javascripts/jwt');

var indexRouter = require('./routes/index');
var adminRouter = require('./routes/admin');
var messageRouter = require('./routes/message');
var forwardRouter = require('./routes/forward');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.html',ejs.__express);    // Ejs render html
app.set('view engine', 'html'); //Template engine modified to html

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(function (req, res, next) {
  // 我这里知识把登陆和注册请求去掉了，其他的多有请求都需要进行token校验
  if (req.url != '/admin/login/doLogin' && req.url != '/admin/user/addUser') {
    let token = req.headers.token;
    console.log(token);
    let jwt = new JwtUtil(token);
    let result = jwt.verifyToken();
    // 如果考验通过就next，否则就返回登陆信息不正确
    if (result == 'err') {
      console.log(result);
      res.status(403).send({status: 403, msg: 'Login is expired, please log in again'});
      // res.render('login.html');
    } else {
      next();
    }
  } else {
    next();
  }
});


app.use('/', indexRouter);
app.use('/admin', adminRouter);
app.use('/message',messageRouter);
app.use('/forward',forwardRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error.html');
});

module.exports = app;
