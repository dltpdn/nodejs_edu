var http = require('http');
var fs = require('fs');
var querystring = require('querystring');

http.createServer(function(req, res){
	if(req.method == 'GET'){
		fs.readFile('./docRoot/form.html', function(err, data){
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end(data);
		});
	}else if(req.method == 'POST'){
		var postdata = "";
		req.on('data', function(chunk){
			console.log("post data:"+chunk.toString());
			postdata+= chunk.toString();
		});
		req.on('end', function(chunk){
			//postdata += chunk.toString();
			var data = querystring.parse(postdata);
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end('<p>id:' + data.id + '</p><p> pwd:' + data.pwd+ '</p><p>msg:' + data.msg+'</p>');
		});
	}
}).listen(9999, function(){
	console.log('server is running on 9999');
});