const fs = require('fs');

letr input = fs.createReadStream('./bigfile.txt');
console.log('-----------start------------');

input.on('data', function(chunk){
	//console.log('read:'+chunk.toString());
	console.log('-----------start------------');	
});
input.on('end', function(){
	console.log('end');
});