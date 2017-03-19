var http = require('http');
var fs = require('fs');
var jade = require('jade');

http.createServer(function(req, res){
	fs.readFile('402.test.jade', 'utf-8', function(err, data){
		var fn = jade.compile(data);
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end(fn({name:'Lee', age:27}));
	});
}).listen(9999, function(){
	console.log('server running on 9999');
});