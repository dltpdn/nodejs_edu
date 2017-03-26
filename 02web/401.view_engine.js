var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname+'/views');


app.get('/', function(req, res){
	res.render('index', {title:'Hey', 'message':'Hello there!', name:'Lee', age:27});
});

app.listen(8080, function(){
	console.log('runngin on 8080');
});