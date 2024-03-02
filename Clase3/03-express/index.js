const express = require('express');
const path = require('path');
const usuarioRouter = require('./routes/usuarioRouter.js');
const { Middlewares } = require('./services/middlewares.js');
const app = express();

app.use(Middlewares);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/usuario', usuarioRouter);

module.exports = app;