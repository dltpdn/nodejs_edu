const express = require('express');
let app = express();


app.use(express.static(__dirname + '/docRoot'));

app.listen(9999, function(){
	console.log('server running on 9999.');
});