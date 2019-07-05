const WebSocket = require('ws');
const express = require('express');

let app = express();
app.get('/', (req, res)=>{
	res.sendFile(__dirname + '/public/echoclient.html')
});
app.listen(8080, function() { });

const ws_server = new WebSocket.Server({ port: 1337 });
ws_server.on('connection', function connection(ws) {
	console.log('conncetion');
	ws.on('message', function incoming(message) {
		console.log('received: %s', message);
		ws.send(message);
	});
	ws.on('error', function(err){
		console.log(err);
	});
	ws.on('close', function(){
		console.log('closed');
	});
});