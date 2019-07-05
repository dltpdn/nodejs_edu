const express = require('express');
const socketio = require('socket.io');

let app = express();
app.get('/', (req, res)=>{
	res.sendFile(__dirname + '/public/room.html');
});
let server = app.listen(8080, ()=>{
	console.log('server on 8080...');
});

let io = socketio(server);

io.on('connect', (socket)=>{
	console.log('a client connected to / namespace.');
	socket.on('join', function(data){
		console.log('join', data);
		socket.join(data);
		io.to(data).emit('msg', 'a cient joined room:' + data);
	});
	socket.on('leave', function(data){
		console.log('leave', data);
		socket.leave(data);
		io.to(data).emit('msg', 'a cient leaved room:' + data);
	});
	socket.on('msg', function(data){
		console.log('msg', data);
		io.to(data.room).emit('msg', 'msg:' + data.msg);
	});
	socket.on('broadcast', function(data){
		console.log('broadcast', data);
		io.emit('msg', 'all msg:' + data);
	});

});
