//npm install mysql

const mysql = require('mysql2');

let conn = mysql.createConnection({
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

conn.query('select * from board', function(err, results, fields) {
	for (var i = 0; i < results.length; i++) {
		console.log(results[i].id + "," + results[i].title + ","
				+ results[i].content + "," + results[i].writer);
	}
});
