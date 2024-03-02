//App en ES5 en
const express = require('express');

//Puerto
let PORT = 3000;

//CRUD

//instanciamos una app de express
const app = express();

//peticion de recursos - Read
app.get('/', (req, res) => {
    console.log(req);
    console.log(req.url);
    console.log(req.method);
    res.status(200).send('Hola Gente, estamos con Express');
});

//respondo con un archivo html
app.get('/index', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

//respondo con una descarga de archivo
app.get('/descarga', (req, res) => {
    res.download(__dirname + '/descarga.txt');
});

//envio de recursos - Create
app.post('/', (req, res) => {
    res.send('Hola mundo');
});

//actualizacion de recursos - Update
app.put('/', (req, res) => {
    res.send('Hola mundo');
});

//eliminacion de recursos - Delete
app.delete('/', (req, res) => {
    res.send('Hola mundo');
});

//Levantamos el server
app.listen(PORT, () => {
    console.log(`Server trabajando en http://localhost:${PORT}`);
})