var express = require('express');

var app = express();

app.get('/', function(req, res){
	res.send('<h1>Index page</h1>');
});

app.get('/next', function(req, res){
	res.send('<h1>next page</h1>');
});

app.listen(9999, function(){
	console.log('server is running on 9999.');
});