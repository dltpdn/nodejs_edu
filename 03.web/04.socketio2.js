const express = require('express');
const socketio = require('socket.io');

let app = express();
app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res){
	res.sendFile(__dirname + '/public/socketio.html');
});
let server = app.listen(8080, function(){
	console.log("server running on 8080...");
});

let io = socketio(1234);
let cnt = 0;
io.on('connect', function(socket){
	console.log('a client connected.');
	socket.emit('anna', {msg : 'do you wana build a snowman?' + (cnt++)});
	socket.on('elsa', function(data){
		console.log('Elsa:', data);
	});
});

