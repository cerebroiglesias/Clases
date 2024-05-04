import Producto from '../models/productModels.js';

const mostrarFormulario = (req, res) => {
    res.render('mongooseProduct', {
        title: 'Registrar Producto'
    })
}

const cargarFormulario = async (req, res) => {

    //desestructuramos los datos del body
    const {
        nombre,
        precio,
        imagen,
        stock
    } = req.body;

    try{
    
        const producto = new Producto({
            nombreProducto: nombre,
            precioProducto:precio,
            imagenProducto: imagen,
            stockProducto: stock
        });
    
        await producto.save();

        return res.send(producto);
        
    }catch(err){
        console.log(err);
        return res.render('error', {
            title: 'Error',
            message: err.message
        });
    }
}

export { 
    cargarFormulario,
    mostrarFormulario
}