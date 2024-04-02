var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var hbs = require('hbs');

//importamos las rutas de la app
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const productRouter = require('./routes/products');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, '/views/partials'));

//utilizamos middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//importamos las funciones de la app
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productRouter);

//pagina de error
app.get('*', (req, res) => {
  res.render('error', {
    title: 'Error', 
    message: 'Pagina no encontrada'
  });
})

module.exports = app;