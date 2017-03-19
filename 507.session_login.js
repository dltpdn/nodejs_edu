//npm install express-session
// npm install body-parser

var express = require('express')
var session = require('express-session');
var bodyparser = require('body-parser');

var users = [ {
	id : 'abc',
	pwd : 'aaa'
}, {
	id : 'def',
	pwd : 'ddd'
} ];
var app = express();

app.use(session({
	secret : 'slsdjfslaljd',

}));
app.use(bodyparser.urlencoded({
	extended : false
}));

app.get('/', function(req, res){
	res.redirect('/login.html');
});

app.get('/logined.html', function(req, res) {
	console.log(req.session);
	if (req.session.user) {
		res.sendFile(__dirname + '/public/logined.html');
	} else {
		res.redirect('/login.html#fail');
	}
});

app.get('/logout.do', function(req, res) {
	console.log('logout.do');
	req.session.destroy(function(err) {
		if (err) {
			console.log('err');
		}
	});
	res.redirect('/login.html');
});

app.use(express.static(__dirname + '/public'));

app.post('/login.do', function(req, res) {
	console.log(req.session);
	var id = req.param('id');
	var pwd = req.param('pwd')
	console.log(id + "," + pwd);
	users.some(function(user) {
		if (id === user.id && pwd === user.pwd) {
			req.session.user = user;
			return true;
		}
	});

	res.redirect('/logined.html');

});

app.listen(8080, function() {
	console.log('server on 8080.');
});