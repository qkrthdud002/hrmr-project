var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session=require('express-session');

var indexRouter = require('./routes/index');
var countdownRouter = require('./routes/countdown');
var loginRouter = require('./routes/login');
var newtodoRouter = require('./routes/newtodo');
var registerRouter = require('./routes/register');
var stopwatchRouter = require('./routes/stopwatch');
var todolistRouter = require('./routes/todolist');
var mainRouter = require('./routes/main');
var logoutRouter = require('./routes/logout')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret:'hrmr',//보안
  resave:false,
  saveUninitialized:true//익명
}));

app.use('/', indexRouter);
app.use('/main', mainRouter);
app.use('/login', loginRouter);
app.use('/logout',logoutRouter);
app.use('/register', registerRouter);
app.use('/todolist', todolistRouter);
app.use('/newtodo', newtodoRouter);
app.use('/stopwatch', stopwatchRouter);
app.use('/countdown', countdownRouter);

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
