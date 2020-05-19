var http = require('http');
var fs = require('fs');
var url = require('url');
var querystring = require("querystring");
var { info, error } = require('./moduls/log');
var cont = require('./utils/constante');
var fire = require('../libs/firebase');
var { countries } = require('countries-list');


var server = http.createServer(function(request, response) {

    var parsed = url.parse(request.url);
    console.log("parsed:", parsed);

    var pathname = parsed.pathname;

    var query = querystring.parse(parsed.query);


    if (pathname === '/') {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write("<html><body><h1>hola mundo esta es la pagina principal</h1></body></html>");
        response.end();
    } else if (pathname === '/final') {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write("<html><body><p>Adios mundo</p></body></html>");
        response.end()
    } else if (pathname === '/info') {
        var resul = info(pathname);
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write(resul);
        response.end()
    } else if (pathname === '/error') {
        var resul = error(pathname);
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write(resul);
        response.end()
    } else if (athname === '/pais') {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.write(JSON.stringify(countries[query.code]));
        response.end()
    } else {
        response.writeHead(404), { 'Content-Type': 'text/html' };
        response.write("<html><body><p>Error url no se encuentra</p></body></html>");
        response.end()
    }



});

server.listen(4000);
console.log("corriendo programa desde el puesto 4000");