const net = require('net');
let socket = net.connect({
	port : 9999
});
socket.on('connect', function() {
	console.log('connected.');
	process.stdin.on('data', function(chunk) {
		socket.write(chunk);

	});
});
socket.on('data', function(chunk) {
	console.log('recv:' + chunk);
});

socket.on('close', function() {
	console.log('socket close.');
});
socket.on('end', function() {
	console.log('end.');
});