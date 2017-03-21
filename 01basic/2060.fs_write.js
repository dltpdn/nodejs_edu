var fs = require('fs');

fs.open('./test.txt', 'w', function(err, fd) {
	if (err) {
		console.log(err);
	} else {
		fs.write(fd, 'file write test with POSIX like API.', 'utf-8', function(err) {
			if(err){
				console.log('writing error.');
			}else{
				console.log('writing success.')
			}
			fs.close(fd, function(err) {
				if (err) {
					console.log(err);
				}
			});
		});
	}
});
