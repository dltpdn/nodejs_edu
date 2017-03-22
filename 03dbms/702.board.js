var express = require('express');
var ejs = require('ejs');
var fs = require('fs');
var bodyParser = require('body-parser');
var mongojs = require('mongojs');

var db = mongojs('172.30.1.49/test', ['board']);
db.on('error', function(err){
   console.log(err);
});
db.on('connect', function(){
   console.log('connet.');
});
var app = express(); 
app.use(bodyParser.urlencoded({extended:false}));
app.get('/', function(req, res){
	fs.readFile(__dirname +'/public/list.html', 'utf8', function(err, data){
		db.board.find(function(err, docs){
		   console.log(arguments);
		   res.send(ejs.render(data, {data:docs}));
		});
	});
});

app.get('/insert', function(req, res){
	res.redirect('/insert.html');
});


app.get('/detail/:id', function(req, res){
	fs.readFile(__dirname +'/public/detail.html', 'utf8', function(err, data){
		console.log(req.params.id);
		db.board.find({_id:mongojs.ObjectId(req.params.id)}, function(err, docs){
			console.log(docs);
			res.send(ejs.render(data, {item:docs[0]}));
		});
	});
});


app.get('/edit/:id', function(req, res){
	fs.readFile(__dirname +'/public/edit.html', 'utf8', function(err, data){
		console.log(req.params.id);
		db.board.find({_id:mongojs.ObjectId(req.params.id)}, function(err, docs){
			console.log(docs);
			res.send(ejs.render(data, {item:docs[0]}));
		});
	});
});

app.post('/save/:id', function(req, res, next){
	console.log('save!!!');
	var id = req.params.id;
	var title = req.param('title');
	var content = req.param('content');
	var writer = req.param('writer');
	var mode = req.param('mode');
	console.log('mode',mode);
	if(mode === 'edit'){
		console.log('edit');
		db.board.update({_id:mongojs.ObjectId(id)}, {$set:{title:title, content:content, writer:writer}}, function(err, docs){
			console.log(arguments);
			if(!err){
				res.redirect('/');
			}else{
				next(err, req, res);
			}
		});
	}else if(mode=== 'insert'){
		console.log('insert');
		db.board.insert({title: title, content:content, writer:writer}, function(err, docs){
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
	db.board.remove({_id:mongojs.ObjectId(id)}, function(err){
		if(!err){
			res.redirect('/');
		}else{
			next(err, req, res);
		}
	});
});

app.use(express.static(__dirname + '/public'));


app.listen(8080, function(){
	console.log('server on 8080');
});
