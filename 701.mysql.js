//npm install mysql

var mysql = require('mysql');

var conn = mysql.createConnection({ host: '172.30.1.32', user:'root', password:'rainMaker',database :'test'});
conn.connect(function(err){
if(err){
console.log(err);
}
});
//conn.query("use test");

conn.query('select * from board', function(err, result, fields){
console.log(arguments);
for(var i=0; i<result.length; i++){
console.log(result[i].id + "," + result[i].title +"," + result[i].content + ","  + result[i].writer);
}
});

conn.query('insert into board(title, content, writer) values("title4", "content4", "aaa")', function(err, result, fields){
console.log(arguments);
});
conn.query('delete from board where id=?', [1], function(){
console.log(arguments);
});

conn.query('update board set writer=? where writer="aaa"', ['zzz'], function(err, result, fields){
console.log(arguments);
});

conn.query('select * from board', function(err, result, fields){
console.log(arguments);
for(var i=0; i<result.length; i++){
console.log(result[i].id + "," + result[i].title +"," + result[i].content + ","  + result[i].writer);
}
});