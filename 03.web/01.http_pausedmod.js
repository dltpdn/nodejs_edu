const fs = require('fs');
const http = require('http');

http.createServer(function(req, res) {
	var rstream = fs.createReadStream(__dirname + '/pub/welcome.html');
	res.writeHead(200, {
		'Content-Type' : 'text/html'
	});
	rstream.on('data', function(chunk) {
		var buffering = res.write(chunk);
		console.log('bufferring:' + (!buffering));
		if (!buffering)
			rstream.pause();
	});
	res.on('drain', function() {
		console.log('drain.');
		rstream.resume();
	});
	rstream.on('end', function() {
		res.end();
	});

}).listen(8080, function() {
	console.log('server on 8080.');
});