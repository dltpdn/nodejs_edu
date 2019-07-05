const express = require('express');
const morgan = require('morgan');

let app = express();
let logger = morgan('combined');
//app.use(logger);
app.use(express.logger('dev'));
app.use(function(req,res){
	res.send('<h1>express</h1>');
});
app.listen(9999, function(){
	console.log('servr running on 9999.');
});