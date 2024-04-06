

const MongoClient = require('mongodb').MongoClient;
const dotenv = require('dotenv').config();

const MONGO_LOCAL = process.env.MONGO_LOCAL;
const MONGO_ATLAS = process.env.MONGO_ATLAS;

console.log(MONGO_LOCAL);
console.log(MONGO_ATLAS);

const cliente = new MongoClient(MONGO_LOCAL);



const conectarDB = async () => {
    try{
        await cliente.connect();
        console.log('==================================================================================');
        console.log('Conexión realizada correctamente');
        console.log('==================================================================================');
        const db = await cliente.db('05-connectmongo');
    } catch(error) {
        console.log('==================================================================================');
        console.log(`Error en la conexión ${error}`);
        console.log('==================================================================================');
        cliente.close();
    }
}

conectarDB();

// module.exports = conectarDB;