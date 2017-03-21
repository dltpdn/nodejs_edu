var stdin = process.stdin;
// stdin.setEncoding(‘utf-8’);

stdin.on('data', function(chunk) {
	// stdin.pause();
	if (chunk !== null) {
		console.log('data:' + chunk.constructor.name + " " + chunk.length);
		for (var i = 0; i < chunk.length; i++) {
			console.log(chunk[i]);
		}
	}
});
stdin.on('readable', function() {
	console.log("paused:" + stdin.isPaused());
	var chunk = stdin.read();
	if (chunk !== null) {
		console.log('read:' + chunk.constructor.name + " " + chunk.length);
		for (var i = 0; i < chunk.length; i++) {
			console.log(chunk[i]);
		}
		stdin.resume();
		console.log("paused:" + stdin.isPaused());
	}
});

stdin.on('end', function() {
	console.log('end');
});

stdin.on('close', function() {
	console.log('close');
});
/** ** for windows *** */
process.on('SIGINT', function() {
	console.log('bye');
	process.exit(0);
});