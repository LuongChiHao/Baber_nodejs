var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var trangchuRouter = require('./routes/trangchu');
var lichhenRouter = require('./routes/lichhen');
var khachhangRouter = require('./routes/khachhang');
var thongkeRouter = require('./routes/thongke');
var tocRouter = require('./routes/toc');

var productsRouter = require('./routes/products');
require('dotenv').config();
var session = require('express-session');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
var hbs = require('hbs');
hbs.registerHelper('sosanh', function(a,b,t){
  return a.toString() == b.toString();
})

hbs.registerHelper('formatDate', function(a,t){
  let date = new Date(a);
  let month = date.getMonth()+1;
  month = month.toString().length== 1 ? '0'+month : month;
  let year = date.getFullYear();
  let day = date.getDate().toString();
  day = day.toString().length == 1 ? '0'+day : day;
  return day+ '-' + month + '-' + year;
})

hbs.registerHelper('getBrandName', function(brandid,brand,t){
  return brand.filter(item => item.id == brandid)[0].name;
})




app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: process.env.JWT_SECRET_KEY,
  resave: true,
  saveUninitialized: true,
  cookie: {secure: false}
}));





// http://localhost:3000
app.use('/', indexRouter);
// http://localhost:3000/products
app.use('/products', productsRouter);
app.use('/users', usersRouter);
app.use('/trangchu', trangchuRouter);
app.use('/lichhen', lichhenRouter);
app.use('/khachhang', khachhangRouter);
app.use('/thongke', thongkeRouter);
app.use('/toc', tocRouter);







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
  res.render('error');
});

module.exports = app;
