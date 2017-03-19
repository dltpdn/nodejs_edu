var express =require('express');
var app = express();


app.get('/', function(req, res){
	console.log(req.query);
	res.send('<p>id:' + req.query.id + '</p><p> pwd:' + req.param('pwd') + '</p>');
});

app.listen(9999, function(){
	console.log('server running on 9999.');
});