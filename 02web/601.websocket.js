var WebSocketServer = require('websocket').server;
var http = require('http');
var express = require('express');

var app = express();
var server = http.createServer(app);
app.use(express.static(__dirname +'/public'));

server.listen(1337, function() { });
console.log('server listening on 1337');

var wsServer = new WebSocketServer({ httpServer: server});

wsServer.on('request', function(request) {
    var connection = request.accept(null, request.origin);

    connection.on('message', function(message) {
        console.log(message);
        connection.send(message.utf8Data);
    });

    connection.on('close', function(connection) {
        console.log('connection closed');
    });
});