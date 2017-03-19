var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(req, res){
	res.writeHead(302, {'Location': 'http://www.google.com'});
	res.end();
}).listen(9999, function(){
	console.log('server is running on 9999.');
});