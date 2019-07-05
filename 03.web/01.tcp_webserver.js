const net = require('net');
const readline = require('readline');

let server = net.createServer(function(sock){
	
	console.log('client connected.', sock.remoteAddress);
	var req = null;
	var method, url, ver;
	sock.on('data', function(data){
		console.log('data', data.toString());
	});
	
	var iface = readline.createInterface(sock);
	iface.on('line', function(line){
		console.log('line', line);
		if(!req){
			req = line;
			[method, url, ver] = req.split(' ');
			console.log(method, url, ver);
		}
		if(line === ""){
			console.log('end of req.', url);
			if(url === "/"){
				sock.write('HTTP/1.1 200 OK\r\n');
				sock.write('Content-type:text/html\r\n');
				sock.write('\r\n');
				sock.write('<h1>Welocm to Server</h1>');
				sock.end();
			}else if(url === '/favicon.ico'){
				sock.write('HTTP/1.1 404 NotFound\r\n');
				sock.write('\r\n');
				sock.end();
			}else if(url === '/abc.html'){
				sock.write('HTTP/1.1 200 OK\r\n');
				sock.write('Content-type:text/html\r\n');
				sock.write('\r\n');
				sock.write('<h1>abc.html</h1>');
				sock.end();
			}
			req = null;
		}
	});
	sock.on('end', function(data){
		console.log('end', data && data.toString());
	});
	sock.on('close', function(){
		console.log('closed.');
	});

});

server.listen(8080, function(){
	console.log("server is running on")
});