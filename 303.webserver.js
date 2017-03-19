var http = require('http');
var fs = require('fs');
var url = require('url');


http.createServer(function(req, res){
	var pathname = url.parse(req.url).pathname;
	if(pathname ==='/'){
		pathname = '/index.html';
	}
	pathname = './docRoot'+ pathname;
	console.log('req:' + req.url + ",path:" + pathname);
	fs.readFile(pathname, function(err, data){
		if(err){
			res.writeHead(404, {'Content-Type': 'text/html'});
			res.end('<h1>404, Not Found</h1>');
		}else{
			//res.writeHead(200, {'Content-Type':'text/html'});
			res.end(data);
		}
	});
}).listen(9999, function(){
	console.log('server running on 9999.');
});