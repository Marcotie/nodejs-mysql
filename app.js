var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var quoetsRouter = require('./routes/quoets');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/quotos',quoetsRouter);

app.use((err,req,res,next)=>{
  const statusCode = err.statusCode || 500;
  console.log(err.message, err.stack);
  res.status(statusCode).json({'message':err.message})
})
module.exports = app;
