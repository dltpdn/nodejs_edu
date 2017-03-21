process.on('message', function(msg) {
	for (var i = 0; i <= msg; i++) {
		(function(v) {
			setTimeout(function() {
				process.send(v);
				if (v == 100) {
					process.exit(0);
				}
			}, i * 100);
		})(i);
	}
	console.log('end of loop');
});