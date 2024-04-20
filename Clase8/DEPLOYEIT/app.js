import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import hbs from 'hbs';

//importamos las rutas de la app
import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';
import productRouter from './routes/products.js';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

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

export default app