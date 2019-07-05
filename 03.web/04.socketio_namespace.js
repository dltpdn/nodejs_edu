const express = require('express');
const socketio = require('socket.io');

let app = express();
app.get('/', (req, res)=>{
	res.sendFile(__dirname + '/public/namespace.html');
});
let server = app.listen(8080, ()=>{
	console.log('server on 8080...');
});

let io = socketio(server);
let nsp1 = io.of('/nsp1');
let nsp2 = io.of('/nsp2');

io.on('connect', (socket)=>{
	console.log('a client connected to / namespace.');
	socket.send('you connected to /(default) namespace.');
});
nsp1.on('connect', (socket)=>{
	console.log('a client connected to /nsp1 namespace.');
	socket.emit('message', 'you connected to /nsp1 namespace.');
});
nsp2.on('connect', (socket)=>{
	console.log('a client connected to /nsp2 namespace.');
	socket.emit('message', 'you connected to /nsp2 namespace.');
});
