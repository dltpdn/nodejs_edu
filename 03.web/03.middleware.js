const http = require('http');
let express = require('express');
let app = express();

app.use(function(req, res, next){
	console.log('first');
	next();
});

app.use(function(req, res, next){
	console.log('last');
	res.send('<h1>express</h1>');
});

//http.createServer(app).listen(9999, function(){
//	console.log('server running on 9999.');
//});
app.listen(9999, function(){
	console.log('server running on 9999.');
});