var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.send('<h1>hello world</h1>');
});

app.listen(3000, function(){
	console.log('server running on 3000.');
});