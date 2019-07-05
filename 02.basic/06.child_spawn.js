const child_process = require('child_process');

let cmd = '/usr/local/bin/node';
if(process.platform.match(/^win\d{2}/)){
	cmd = 'node';
}
let child = child_process.spawn(cmd, [__dirname + '/06.child_spawned.js']);

child.stdin.write('world');
child.stdout.on('data', function(data){
	console.log('from child :' + data);
	child.kill();
});

child.stderr.on('data', function(data){
	console.log('err:' + data);
});

child.on('exit', function(code){
	console.log('child shutdown:' + code);
});