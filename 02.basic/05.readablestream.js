let stdin = process.stdin;
stdin.setEncoding('utf-8');

function onData(chunk) {
	console.log("on data isPaused:" + stdin.isPaused());
	
	if (chunk !== null) {
		console.log('on data:' + chunk.toString());
	}
	stdin.pause();
	console.log("on data isPaused:" + stdin.isPaused());
	if(stdin.isPaused()){
		stdin.removeListener('data', arguments.callee);
		stdin.addListener('readable', onReadable);
	}
}

function onReadable(){
	console.log('on readable readable: %s, isPaused:%s' , stdin.readable, stdin.isPaused());
	let chunk = stdin.read();
	if (chunk !== null) {
		console.log('on redable: ' + chunk.toString())
	}
	if(stdin.isPaused()){
		stdin.removeListener('readable', arguments.callee);
		stdin.addListener('data', onData);
		stdin.resume();
	}
}

stdin.on('data', onData);

stdin.on('end', function() {
	console.log('end');
});

stdin.on('close', function() {
	console.log('close');
});
/** ** for windows: ctrl + Z *** */
process.on('SIGINT', function() {
	console.log('bye');
	process.exit(0);
});