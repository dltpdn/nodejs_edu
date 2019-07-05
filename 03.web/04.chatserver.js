const express = require('express');
const socketio = require('socket.io');

let app = express();
app.get('/', function(req, res){
	res.sendFile(__dirname + '/public/chat.html');
});

let server = app.listen(8080, function(){
	console.log('server running...');
})

let io = socketio(server);
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

