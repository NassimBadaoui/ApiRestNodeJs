// Imports
const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./apiRouter').router;

// Instantiate server
const server = express();

// Body parser configuration
server.use(bodyParser.urlencoded({ extended : true }));
server.use(bodyParser.json());

// Configure routes
server.get('/', function (req , res){
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send('<h1> Bienvenue sur mon serveur </h1>');
});

server.use('/api/', apiRouter);

// Launch server
server.listen(8080, function(){
    console.log('Serveur en écoute')
});

console.log( 10 >= 12 >= 3 );
