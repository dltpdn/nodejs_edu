var child_process = require('child_process');

var cmd = 'node';
if (process.platform.match(/^win\d{2}/)) {
	cmd = 'node';
}
child_process.execFile(cmd, [ '--version' ], function(err, stdout, stderr) {
	if (err) {
		console.log('error.', err.code);
	} else {
		console.log(stdout);
	}
});