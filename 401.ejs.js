var http = require('http');
var fs = require('fs');
var ejs = require('ejs');

http.createServer(function(req, res){
	fs.readFile('401.test.ejs','utf-8', function(err, data){
		var html = ejs.render(data.toString(), {name:'Lee', age:27});
		console.log(html);
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end(html);
	});
}).listen(9999, function(){
	console.log('server is running on 9999');
});