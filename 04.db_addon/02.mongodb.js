//npm install mongojs


var mongojs = require('mongojs');
var db = mongojs('localhost/test', ['board']);
db.on('error', function(err){
   console.log(err);
});
db.on('connect', function(){
   console.log('db conneted.');
});
db.board.find(function(err, docs){
   console.log(arguments);
   for(var i=0; i<docs.length; i++){
      console.log(docs[i]._id +"," + docs[i].title +"," + docs[i].content + "," +  docs[i].writer);
   }
});

db.board.insert({title:'title4', content :'content4', writer :'kkk'});