process.stdout.write('hello console\n');

process.stdin.on('data', function(chunk) {
	if (chunk.toString().startsWith('exit')) {
		process.stdout.write('bye!\n');
		process.exit(0);
	}
	process.stdout.write(chunk);

});

//process.stdin.pipe(process.stdout);