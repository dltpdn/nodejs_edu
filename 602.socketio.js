var http = require('http');
var express = require('express');
var socketio = require('socket.io');

var app = express();
var server = http.createServer(app);
var io = socketio(server);
//var io = socketio(5555);

app.use(express.static(__dirname +'/public'));
app.get('/', function(req, res){
	res.sendFile(__dirname + '/public/socketio.html');
});

server.listen(3000, function(){
	console.log("server running...");
});
var cnt = 0;
io.on('connect', function(socket){
	console.log('connect');
	socket.emit('anna', {msg : 'do you wana build a snowman?' + (cnt++)});
	socket.on('elsa', function(data){
		console.log(data);
	});
});

