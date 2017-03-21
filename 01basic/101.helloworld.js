/**
 * New node file
 */
 http = require('http');

http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end('<h1>Hello NodeJs</h1>');
}).listen(5227, function(){
	console.log("server is listening on 5227");
});

