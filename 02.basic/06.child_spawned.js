//child_spawned.js

process.stdin.on('data', function(data) {
	process.stdout.write('Hello ' + data + '\n');
});

process.on('SIGTERM', function() {
	console.log('child SIGTERM');
	process.exit(1);
});