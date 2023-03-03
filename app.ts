var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./src/routes/indexRouter');
var usersRouter = require('./src/routes/userRouter');
var productsRouter = require('./src/routes/productRouter');
var app = express();
var cors = require('cors');

const swaggerUi = require('swagger-ui-express'),
swaggerDocument = require(`${__dirname}/swagger.json`);

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products',productsRouter);
app.use(
  '/api-docs',
  swaggerUi.serve, 
  swaggerUi.setup(swaggerDocument)
);

app.use((err,req,res,next)=>{
  const statusCode = err.statusCode || 500;
  console.log(err.message, err.stack);
  res.status(statusCode).json({'message':err.message})
})
app.listen(4000,()=>{
  console.log("server listening on port 4000")
})
module.exports = app;
