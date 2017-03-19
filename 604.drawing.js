var http = require('http');
var socketio = require('socket.io');
var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));
app.get('/', function(req,res){
	res.sendFile(__dirname +'/public/drawing.html');
});
var server = http.createServer(app);
var io = socketio(server);

io.on('connect', function(socket){
	socket.on('draw', function(point){
		io.emit('draw', point);
	});
	
	socket.on('clear', function(point){
		io.emit('clear', point);
	});
});

server.listen(9999, function(){
	console.log('running on 9999');
});