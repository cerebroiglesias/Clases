

const MongoClient = require('mongodb').MongoClient;
const dotenv = require('dotenv').config();

const MONGO_ATLAS = process.env.MONGO_ATLAS;

console.log(MONGO_ATLAS);

const cliente = new MongoClient(MONGO_ATLAS);

const database = 'educacionit';

const conectarDB = async () => {
    try{
        //me conecto a la base de datos
        await cliente.connect();

        //selecciono la base de datos
        const db = cliente.db(database)

        //creamos una coleccion
        const collection = await db.collection('documents');

        //insertamos un documento
        collection.insertOne({
            nombre: 'Pepe',
            apellido: 'Perez',
            edad: 25,
            provincia: 'Buenos Aires'
        });

        console.log('==================================================================================');
        console.log(`Conexión realizada correctamente a ${MONGO_ATLAS} - Base de datos: ${database}`);
        console.log('==================================================================================');
    } catch(error) {
        console.log('==================================================================================');
        console.log(`Error en la conexión ${error}`);
        console.log('==================================================================================');
        cliente.close();
    }
}

conectarDB();

// module.exports = conectarDB;