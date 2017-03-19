var http = require('http');

var server = http.createServer(function(req, res){
	console.log('req:'+ req.url);
	res.writeHead(200, {'Content-Type': 'text/html'});
	//res.end('<h1>Welcome again NodeJs</h1>');
	res.write('<h1>Welcome again NodeJs!</h1>');
	res.end();
});

server.listen(9998, function(){
	console.log('server is listening on 9998');
});