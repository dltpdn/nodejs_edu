const express =require('express');
const bodyParser = require('body-parser');

let app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:false}));

app.post('/param_post.do', function(req, res){
	console.log(req.body);
	res.send('<p>id:' + req.body.id + '</p><p> pwd:' + req.param('pwd') + '</p>');
});
app.listen(9999, function(){
	console.log('server is running on 9999.');
});