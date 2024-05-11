import Producto from '../models/productModels.js';

const mostrarFormulario = (req, res) => {
    res.render('mongooseProduct', {
        title: 'Registrar Producto'
    })
}
//insertamos datos en la database
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

        return res.render('productoCargado', {
            title: 'Producto Cargado',
        });
        
    }catch(err){
        console.log(err);
        return res.render('error', {
            title: 'Error',
            message: err.message
        });
    }
}

//listamos todos los productos
const listarProductosTabla = async (req, res) => {

    try{
        const productos = await Producto.find();
    
        res.render('listarProductos', {
            message: 'Listado de productos',
            products: productos
        })
    }catch(err){
        console.log(err);
        return res.render('error', {
            title: 'Error',
            message: '¡Error en la base de datos!'
        });
    }
}

const listarProductosCards = async (req, res) => {

    try{
        const productos = await Producto.find();

        res.render('listarCards', {
            message: 'Listado de productos',
            products: productos
        })
    
    }catch(err){
        console.log(err);
        return res.render('error', {
            title: 'Error',
            message: '¡Error en la base de datos!'
        });
    }
}

const mostrarDescripcionProducto = async (req, res) => {

    try{
        const { id } = req.params;

        const producto = await Producto.findById(id);

        res.render('describirProducto', {
            title: 'Describir producto',
            product: producto
        });

    }catch(err){
        console.log(err);
        return res.render('error', {
            title: 'Error',
            message: '¡Error en la base de datos!'
        });
    }
}

const eliminarProducto = async (req, res) => {
    
    try{
        const { id } = req.params;

        await Producto.findByIdAndDelete(id);

        res.redirect('/productos/list-cards');

    }catch(err){
        console.log(err);
        return res.render('error', {
            title: 'Error',
            message: '¡Error en la base de datos!'
        });
    }
}

const mostrarActualizarProducto = async (req, res) => {

    try{
        const { id } = req.params;

        const producto = await Producto.findById(id);

        res.render('mongooseProduct', {
            title: 'Actualizar Producto',
            product: producto
        });

    }catch(err){
        console.log(err);
        return res.render('error', {
            title: 'Error',
            message: '¡Error en la base de datos!'
        });
    }
}

const actualizarProducto = async (req, res) => {

    try{
        const { id } = req.params;

        const { nombre, precio,imagen,stock } = req.body;

        const producto = await Producto.findById(id);

        if(!nombre || !precio || !imagen || !stock){

            return res.render('error', {
                title: 'Error',
                message: 'Faltan campos por rellenar'
            });
        }

        //actualizamos el producto
        producto.nombreProducto = nombre;
        producto.precioProducto = precio;
        producto.imagenProducto = imagen;
        producto.stockProducto = stock;

        await producto.save();

        res.redirect('/productos/list-cards');

    }catch(err){
        console.log(err);
        return res.render('error', {
            title: 'Error',
            message: '¡Error en la base de datos!'
        });
    }
}

export { 
    cargarFormulario,
    mostrarFormulario,
    listarProductosTabla,
    listarProductosCards,
    mostrarDescripcionProducto,
    eliminarProducto,
    mostrarActualizarProducto,
    actualizarProducto
}