var readline = require('readline');

var rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt('type>');
rl.prompt();
rl.on('line', function(line){
	if(line === 'exit'){
		rl.close();
	}
	console.log(line);
	rl.prompt();
});
rl.on('close', function(){
	process.exit();
});
