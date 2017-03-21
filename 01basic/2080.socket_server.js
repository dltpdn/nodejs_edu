var net = require('net');

var server = net.createServer();
server.on('connection', function(socket) {
	console.log('connect' + socket.remoteAddress);
	socket.write('welcome to server.\n\r');

	socket.on('data', function(chunk) {
		console.log('data:' + chunk);

	});
	socket.on('close', function() {
		console.log('socket close');

	});
	process.stdin.on('data', function(chunk) {
		socket.write(chunk);

	});
});

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