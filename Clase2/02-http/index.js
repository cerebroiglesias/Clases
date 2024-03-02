//importamos una libreria
//ES5
var http = require('node:http');

var PORT = 9000;

//3000 puerto de React
//4200 puerto de Angular
//57000 puerto de Vue
//8080 puerto de Spring
//3306 puerto de MySQL
//27000 puerto de MongoDB

var hostname = '127.0.0.1';

//creamos el server
var server = http.createServer((request, response) => {

    response.statusCode = 200;

    response.setHeader('Content-Type', 'text/plain');

    //GET
    //POST
    //PUT
    //DELETE

    //analiza la ruta

    console.log(request);

    console.log('===============================================================');
    console.log(request.url);
    console.log(request.method);
    console.log(request.headers);
    console.log(request.body);
    console.log('===============================================================');

    if(request.url === '/hola'){
        response.end('Hola mundo');
    }else if(request.url === '/adios'){
        response.end('Adios mundo');
    }else if(request.url === '/error'){
        response.statusCode = 404;
        response.end('Error');
    }else{
        response.end('Hola mundo');
    }
});
//levantamos el server
server.listen(PORT, hostname, () => {
    console.log(`Server running at http://${hostname}:${PORT}/`);
})