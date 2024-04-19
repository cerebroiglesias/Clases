const Middlewares = (req, res, next) => {
    console.log('Estamos en el middleware');
    console.log('hola gente');

    next();
}


function encriptar(req, res, next) {
    console.log('================================');
    console.log('encriptando');
    console.log('================================');

    next();
}

module.exports = {
    Middlewares,
    encriptar
};