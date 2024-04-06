const fs = require('node:fs');

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

    //imprimimos el producto
    console.log(producto);

    //guardamos el producto en un archivo .txt sincronico
    try{
        fs.appendFileSync('archivos/productosSync.txt', "," + JSON.stringify(producto));
    }catch(err){
        try{
            fs.appendFileSync('archivos/error.txt', "," + JSON.stringify(err));
        }catch(e){
            console.log(e);
        }
    }
    
    //guardamos el producto en un archivo .txt asincronico
    fs.appendFile('archivos2/productosAsync.txt', "," + JSON.stringify(producto), (err) => {
        if(err){
            console.log(err);
            try{
                fs.appendFileSync('archivos/error.txt', "," + JSON.stringify(err));
            }catch(e){
                console.log(e);
            }
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