const fs = require('fs');
let buff_length = 10;
fs.open('./test.txt', 'r', function(err, fd) {
	if (err) {
		console.log(err);
	} else {
		var buff = new Buffer(buff_length);
		readWhile(fd, buff, 0, buff_length, 0);
	}
});


function readWhile(fd, buff, offset, length, position){
	fs.read(fd, buff, offset, length, position, function(err, read, buff){
		if(err){
			console.log(err);
		}else{
			if(read > 0){
				console.log(position, read, buff.toString('utf-8', 0, read));
				readWhile(fd, buff, offset, length, position + read);
			}else{
				console.log('EOF');
			}
		}
		
	});
}