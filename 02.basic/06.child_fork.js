const child_process = require('child_process');

let child = child_process.fork(__dirname + '/06.child_forked.js');
child.on('message', function(msg) {
	console.log('msg:' + msg);
});

child.send(100);

child.on('exit', function() {
	console.log('child terminated.')
	process.exit(0);
})