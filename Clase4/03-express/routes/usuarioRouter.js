const express = require('express');
const { encriptar } = require('../services/middlewares');
const { descargas, home, bienvenida, guardar, formulario, actualizar, borrar, template } = require('../controllers/usuarioController');

const router = express.Router();

router.get('/', home);

router.get('/descarga', descargas);

router.get('/template', template); 

router.post('/guardar', encriptar, guardar);

router.post('/formulario', encriptar, formulario);

router.put('/actualizar', actualizar);

router.delete('/borrar', borrar);

router.get('/bienvenida', bienvenida);


module.exports = router;