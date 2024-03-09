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
    res.send(`
        <form action="api/usuarios/login" method="post">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="emmail" aria-describedby="emailHelp">
            </div>
        </form>
    `);
}

module.exports = {
    descargas,
    home,
    bienvenida,
    guardar,
    formulario,
    actualizar,
    borrar,
    template
}