var fs = require('fs');
var async = require('async');

/*
 * fs.open('./test.txt', 'w', function(err, fd){ if(err){ console.log(err);
 * }else{ fs.write(fd, 'async test', 'utf-8', function(err) { fs.close(fd,
 * function(err){ if(err){ console.log(err); }else{ console.log('success'); }
 * }); }); } });
 */

async.waterfall([ function(callback) {
	fs.open('./test.txt', 'w', callback);
}, function(fd, callback) {
	fs.write(fd, 'async waterfall test', 'utf-8', function(err) {
		callback(err, fd);
	});
}, function(fd, callback) {
	fs.close(fd, callback);
} ], function(err, results) {
	console.log(arguments);
});
