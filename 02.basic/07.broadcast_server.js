const net = require('net');

let clients = [];
let server = net.createServer();
server.on('connection', function(socket) {
	console.log('connect' + socket.remoteAddress);
	socket.write('welcome to server.\n\r');
	clients.push(socket);

	broadcast(socket.remoteAddress + " has connected.");
	socket.on('data', function(chunk) {
		console.log('data:' + chunk);

		broadcast(chunk);

	});
	socket.on('close', function() {
		console.log('socket close');

		var idx = clients.indexOf(this);

		console.log(idx);

		clients.splice(idx, 1);

	});
	process.stdin.on('data', function(chunk) {
		socket.write(chunk);

	});
});

function broadcast(msg) {
	clients.forEach(function(el, idx) {
		el.write(msg);

	});
}

server.on('close', function() {
	console.log('close');
});
server.on('error', function() {
	console.log('error')
});
server.on('listening', function() {
	console.log('listening.');
});

server.listen(9999, function() {
	console.log('listen.');
});