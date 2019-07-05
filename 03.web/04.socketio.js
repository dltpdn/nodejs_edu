const http = require('http');
const express = require('express');
const socketio = require('socket.io');

let app = express();
let server = http.createServer(app);
app.get('/', function(req, res){
	res.sendFile(__dirname + '/public/socketio.html');
});

server.listen(8080, function(){
	console.log("server running on 8080...");
});

let io = socketio(server);
let cnt = 0;
io.on('connect', function(socket){
	console.log('a client connected.');
	socket.emit('anna', {msg : 'do you wana build a snowman?' + (cnt++)});
	socket.on('elsa', function(data){
		console.log('Elsa:', data);
	});
});

