const app = require('./app.js');
const dotenv = require('dotenv');
const conectarDB = require('./database/conexion.js');
dotenv.config();

const PORT = process.env.PORT || 3000;

//ejecutamos la funcion de conexion a base de datos
conectarDB();

const server = app.listen(PORT, () => {
    console.log(`Server trabajando en http://localhost:${PORT}`);
})

server.on('error', (error) => {
    console.log(`Error en servidor ${error}`);
})