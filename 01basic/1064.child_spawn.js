var child_process = require('child_process');

var cmd = '/usr/local/bin/node';
if(process.platform.match(/^win\d{2}/)){
cmd = 'node';
}
var child = child_process.spawn(cmd, ['1064.child_spawned.js']);

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