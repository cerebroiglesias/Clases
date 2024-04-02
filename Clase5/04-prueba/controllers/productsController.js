const fs = require('node:fs');

//creamos un array de productos
let products = [];

const mostrarFormulario = (req, res) => {
    res.render('registroProductos', {
        title: 'Registrar Producto'
    })
}

const cargarFormulario = (req, res) => {

    //desestructuramos los datos del body
    const {
        nombre,
        precio,
        imagen,
        stock
    } = req.body;

    if(!nombre || !precio || !imagen || !stock){

        return res.render('error', {
            title: 'Error',
            message: 'Faltan campos por rellenar'
        });

    }

    //creamos un objeto con los datos del producto
    const producto = {
        nombreProducto: nombre,
        precioProducto: precio,
        imagenProducto: imagen,
        stockProducto: stock
    }

    products.push(producto);

    //imprimimos el producto
    console.log(producto);

    //guardamos el producto en un archivo .txt sincronico
    fs.writeFileSync('archivos/productosSync.txt', JSON.stringify(products));

    
    //guardamos el producto en un archivo .txt asincronico
    fs.writeFile('archivos2/productosAsync.txt', JSON.stringify(products), (err) => {
        if(err){
            console.log(err);
            fs.writeFileSync('archivos/error.txt', JSON.stringify(err));
        }
    });


    //enviamos el producto como respuesta de tipo JSON
    res.json({
        'nombre': nombre,
        'precio': precio,
        'imagen': imagen,
        'stock': stock
    })
}

module.exports = {
    mostrarFormulario,
    cargarFormulario
}