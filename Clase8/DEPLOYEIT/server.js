import app from './app.js';
import dotenv from 'dotenv';
import conectarDB from './database/mongooseConect.js';
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