var http = require('http');
var server = http.createServer();

server.on('connection', function(socket) {
	console.log('connection :' + socket.localAddress);
});

server.on('request', function(req, res) {
	console.log('req url:' + req.url);
	res.writeHead(200, {
		'Content-Type' : 'text/html'
	});
	res.end('<h1>Welcome to NodeJs</h1>');
});

server.on('close', function() {
	console.log('close.');
});

server.listen(9999, function() {
	console.log('server is listening on 9999');
});
