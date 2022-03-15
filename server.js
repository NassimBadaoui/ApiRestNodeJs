// Imports
const express = require('express');
const bodyParser = require('body-parser');
//const apiRouter = require('./apiRouter').router;
const router = require('./services/routes');

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

server.use('/api/', router);

// Launch server
server.listen(3000, function(){
    console.log('Serveur en écoute')
});
