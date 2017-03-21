var http = require('http');
var express = require('express');
var socketio = require('socket.io');

var app = express();
var server = http.createServer(app);
var io = socketio(server);

app.get('/', function(req, res){
	res.sendFile(__dirname + '/public/chat.html');
});

server.listen(3000, function(){
	console.log('server running...');
});

io.on('connection', function(socket){
	console.log('connected.' + socket.id);
	socket.on('login', function(data){
		io.emit('msg',{text : data.id +' has connected.'} );
	});
	socket.on('msg', function(data){
		io.emit('msg', {text: data.id + ':' + data.text});
	});
	socket.on('logout', function(data){
		io.emit('msg', {text : data.id + ' has disconnected.' });
	});
});

