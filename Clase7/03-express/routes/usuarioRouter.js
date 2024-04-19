const express = require('express');
const router = express.Router();

const { 
    descargas,
    home, 
    bienvenida, 
    registro, 
    login, 
    registrarUsuario, 
    loginUsuario, 
    guardar, 
    formulario, 
    actualizar, 
    borrar, 
    template 
} = require('../controllers/usuarioController');

const { encriptar } = require('../services/middlewares');


router.get('/', home);

router.get('/descarga', descargas);

router.get('/template', template); 

router.get('/registro', registro);

router.get('/login', login);

router.post('/guardar', encriptar, guardar);

router.post('/registro', registrarUsuario);

router.post('/login', loginUsuario);

router.post('/formulario', encriptar, formulario);

router.put('/actualizar', actualizar);

router.delete('/borrar', borrar);

router.get('/bienvenida', bienvenida);



module.exports = router;