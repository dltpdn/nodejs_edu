var express = require('express');
var ejs = require('ejs');
var fs = require('fs');
var mysql = require('mysql2');
var bodyParser = require('body-parser');

var app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:false}));
var conn = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : 'admin',
	database : 'test'
});
conn.connect(function(err) {
	if (err) {
		console.log(err);
	}
});

app.get('/', function(req, res){
	fs.readFile(__dirname +'/public/list.html', 'utf8', function(err, data){
		conn.query('SELECT * FROM board', function(err, rs, field){
			console.log(rs);
			res.send(ejs.render(data, {data:rs}));
		});
	});
	
});

app.get('/insert', function(req, res){
	res.redirect('/insert.html');
});

app.get('/detail/:id', function(req, res){
	fs.readFile(__dirname +'/public/detail.html', 'utf8', function(err, data){
		console.log(req.params.id);
		conn.query('SELECT * FROM board WHERE _id=?',[req.params.id], function(err, rs, field){
			console.log(rs);
			res.send(ejs.render(data, {item:rs[0]}));
		});
	});
});

app.get('/edit/:id', function(req, res){
	fs.readFile(__dirname +'/public/edit.html', 'utf8', function(err, data){
		console.log(req.params.id);
		conn.query('SELECT * FROM board WHERE _id=?',[req.params.id], function(err, rs, field){
			console.log(rs);
			res.send(ejs.render(data, {item:rs[0]}));
		});
	});
});

app.post('/save/:id', function(req, res, next){
	var id = req.params.id;
	var title = req.param('title');
	var content = req.param('content');
	var writer = req.param('writer');
	var mode = req.param('mode');
	if(mode === 'edit'){
		conn.query('UPDATE board SET title=?, content=?, writer=? WHERE _id=?', [title, content, writer, id], function(err, rs, field){
			console.log(arguments);
			if(!err){
				res.redirect('/');
			}else{
				next(err, req, res);
			}
		});
	}else if(mode=== 'insert'){
		conn.query('INSERT INTO board(title, content, writer) VALUES(?,?,?)', [title, content, writer], function(err, rs, field){
			if(!err){
				res.redirect('/');
			}else{
				next(err, req, res);
			}
		});
	}
});

app.get('/delete/:id', function(req, res, next){
	var id = req.params.id;
	conn.query('DELETE FROM board WHERE _id=?', [id], function(err, rs, field){
		if(!err){
			res.redirect('/');
		}else{
			next(err, req, res);
		}
	});
});

app.use(function(err, req, res, next){
	res.status(500).send('500 Internal Server Error:'+ err.message);
});

app.listen(8080, function(){
	console.log('server on 8080.')
});