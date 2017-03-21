var http = require('http');
var url = require('url');

http.createServer(function(req, res){
	console.log('req:' + req.url);
	var query = url.parse(req.url, true).query;
	console.log(query);
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end('<p>ID : '+query.id +'</p><p>PWD: '+ query.pwd+'</p>');
}).listen(9999, function(){
	console.log('server is running on 9999');
});