import { model, Schema } from 'mongoose';

const productSchema = new Schema({
    nombreProducto: {
        type: String,
        required: true
    },
    precioProducto: {
        type: Number,
        required: true
    },
    imagenProducto: {
        type: String,
        required: true
    },
    stockProducto: {
        type: Number,
        required: true
    },
    timestamp: {
        type: Date,
        default: new Date()
    }
});

export default model('products', productSchema)