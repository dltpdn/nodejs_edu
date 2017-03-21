var https = require('https');
var fs = require('fs');
var opt = {
		key : fs.readFileSync(__dirname + '/keys2/server.pem'),
		cert : fs.readFileSync(__dirname + '/keys2/serverx509.crt')
}
https.createServer(opt, function(req, res){
	console.log('reqest');
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end('<h1>HTTPS server </h1>');
}).listen(443, function(){
	console.log('http server on 8080');
});