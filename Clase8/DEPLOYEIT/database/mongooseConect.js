

import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const MONGO_LOCAL = process.env.MONGO_LOCAL_MONGOOSE;
const MONGO_ATLAS = process.env.MONGO_ATLAS_MONGOOSE;

const conectarDB = async () => await mongoose.connect(MONGO_LOCAL).then(() => {
    console.log('==================================================================================');
    console.log(`Conexión realizada correctamente a ${MONGO_LOCAL}`);
    console.log('==================================================================================');
}, (error) => {
    console.log('==================================================================================');
    console.log(`Error en la conexión ${error}`);
    console.log('==================================================================================');
});

export default conectarDB;