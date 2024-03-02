const express = require('express');
const { encriptar } = require('../services/middlewares');

const router = express.Router();

router.get('/', (req, res) => {
    
    // console.log(req);
    console.log(req.url);
    console.log(req.method);
    res.status(200).send('Hola Gente, estamos con Express');
});

router.get('/descarga', (req, res) => {
    res.download(__dirname + './descarga.txt');
})

router.post('/guardar', encriptar, (req, res) => {
    
    const nombre = req.body.nombre;
    
    console.log(nombre);
    
    res.status(201).send('Guardado Nombre: ' + nombre);
});

router.post('/formulario', encriptar, (req, res) => {
    
    const nombre = req.body.nombre;
    const email = req.body.email;
    const apellido = req.body.apellido;

    // const { 
    //     nombre,
    //     email,
    //     apellido
    // } = req.body;

    res.json({
        Nombre: nombre,
        Apellido: apellido,
        Email: email
    });

});

router.put('/', (req, res) => {
    res.send('Hola mundo');
});

router.delete('/', (req, res) => {
    res.send('Hola mundo');
});

module.exports = router;