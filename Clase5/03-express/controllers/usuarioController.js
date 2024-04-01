const descargas = (req, res) => {
    res.download(__dirname + './public/descarga.txt');
}

const home = (req, res) => {
    
    console.log(req.url);
    console.log(req.method);
    res.status(200).send('Hola Gente, estamos con Express');
}

const bienvenida = (req, res) => {
    res.render('index');
}

const registro = (req, res) => {
    res.render('registro');
}

const registrarUsuario = (req, res) => {
    const {
        nombre,
        apellido,
        email,
        password 
    } = req.body;
    console.log(`Nombre: ${nombre}, Apellido: ${apellido}, Email: ${email}, Password: ${password}`);
    res.send('Usuario Registrado');
}

const guardar = (req, res) => {
    
    const nombre = req.body.nombre;
    
    console.log(nombre);
    
    res.status(201).send('Guardado Nombre: ' + nombre);
}

const formulario = (req, res) => {
    
    const nombre = req.body.nombre;
    const email = req.body.email;
    const apellido = req.body.apellido;

    // const { 
    //     nombre,
    //     email,
    //     apellido
    // } = req.body;

    res.json({
        Nombre: nombre,
        Apellido: apellido,
        Email: email
    });

}

const actualizar = (req, res) => {
    res.send('Actualizando');
}

const borrar = (req, res) => {
    res.send('Borrando');
}

const template = (req, res) => {
    let nombre = 'Juan';
    res.send(`
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <title>Mi Template</title>
            </head>
            <body>
                <h1>Mi Template ${nombre}</h1>
            </body>
        </html>
    `)
}

const login = (req, res) => {
    res.send(`<form>
    <label for="nombre">Nombre</label>
    <input type="text" id="nombre" name="nombre">
    </form>`);
}

const loginUsuario = (req, res) => {
    const {
        email,
        password 
    } = req.body;
    console.log(`Email: ${email}, Password: ${password}`);
    res.send('Usuario loggeado');
}

module.exports = {
    descargas,
    home,
    bienvenida,
    registro,
    login,
    registrarUsuario,
    loginUsuario,
    guardar,
    formulario,
    actualizar,
    borrar,
    template
}