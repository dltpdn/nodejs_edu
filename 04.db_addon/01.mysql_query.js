//npm install mysql

var mysql = require('mysql2');

var conn = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : 'admin',
	database : 'test'
});
conn.connect(function(err) {
	if (err) {
		console.log('mysql connection error :', err);
	}else{
		console.log('mysql db connected as Id: ', conn.threadId);
	}
});

conn.query('INSERT INTO board(title, content, writer) VALUES("title4", "content4", "aaa")',
			function(err, result, fields) {
				console.log(arguments);
			});
conn.query('delete from board where id=?', [ 1 ], function() {
	console.log(arguments);
});

conn.query('UPDATE board SET writer=? WHERE writer="aaa"', [ 'zzz' ], function(
		err, result, fields) {
	console.log(arguments);
});

conn.query('SELECT * FROM board', function(err, result, fields) {
	console.log(arguments);
	for (var i = 0; i < result.length; i++) {
		console.log(result[i].id + "," + result[i].title + ","
				+ result[i].content + "," + result[i].writer);
	}
});