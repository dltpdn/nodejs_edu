const child_process = require('child_process');

let cmd = 'ls';
if (process.platform.match(/^win\d{2}/)) {
	cmd = 'dir';
}
child_process.exec(cmd, function(err, stdout, stderr) {
	if (err) {
		console.log('error.', err.code);
	} else {
		console.log(stdout);
	}
});