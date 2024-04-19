const express = require('express');
const path = require('path');
const cors = require('cors');
const usuarioRouter = require('./routes/usuarioRouter.js');
const userHome = require('./routes/userHome.js');
const hbs = require('hbs');
const { Middlewares } = require('./services/middlewares.js');
const app = express();

app.use(Middlewares);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//Seteamos el motor de plantillas que usaremos - SSR
app.set('view engine', 'hbs');

//Seteamos la carpeta donde busca las plantillas
app.set('views', path.join(__dirname, 'views'));

//Seteamos los archivos parciales de hbs
hbs.registerPartials(path.join(__dirname, 'views/partials'));

app.use('/api/usuarios', usuarioRouter);
app.use('/', userHome);

module.exports = app;