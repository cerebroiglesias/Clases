const {sumar, restar, multiplicar, dividir} = require("./operaciones.js")

process.on('exit', function(error){

});

process.on('uncaughtException', function(error){
    console.log('error de excepcion', error);
});

funcionQueNoExiste()