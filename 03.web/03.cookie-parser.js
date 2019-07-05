const express = require('express')
const cookieParser = require('cookie-parser')
let app = express()
app.use(cookieParser())

app.get('/', function (req, res) {
	res.cookie('name', 'lee')
	res.cookie('age', 27)
	res.redirect('/showCookie');
});

app.get('/showCookie', function(req, res){
	console.log('cookie:', req.cookies);
	res.send('cookies' + JSON.stringify(req.cookies) );
});
app.listen(8080)