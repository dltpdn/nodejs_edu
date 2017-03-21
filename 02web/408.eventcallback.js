var fs = require('fs');
// var async = require('async');
var EventEmitter = require('events');
var util = require('util');

function My() {
	EventEmitter.call(this);
}
util.inherits(My, EventEmitter);
var my = new My();

fs.open('./test.txt', 'w', function(err, fd) {
	if (err) {
		my.emit('error', err)
	} else
		my.emit('open', fd);
});
my.on('open', function(fd) {
	fs.write(fd, 'async test', 'utf-8', function(err) {
		if (err)
			my.emit('error', err);
		else
			my.emit('write', fd);
	});
});
my.on('write', function(fd) {
	fs.close(fd, function(err) {
		if (err)
			my.emit('err', err);
		else
			my.emit('close');
	});
});
my.on('close', function() {
	console.log('success');
});

my.on('error', function(err) {
	console.log(arguments);
});