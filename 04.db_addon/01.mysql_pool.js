const mysql = require('mysql2');

let sql = 'SELECT * FROM board';

let pool = mysql.createPool({
	host : 'localhost',
	user : 'root',
	password : 'admin',
	database :'test',
	connectionLimit :10
}); 

pool.query(sql, function(err, rs, fields){
	console.log(rs);
});

pool.getConnection(function(err, conn){
	conn.query(sql, function(err, rs, field){
		conn.release();
		console.log(rs);
		
	});
});
