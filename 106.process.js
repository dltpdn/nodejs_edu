// run with following command
// >node process.js exit 5000

console.log(process.argv);
process.argv.forEach(function(val, idx, array){
	console.log('%d : %s', idx, val );
});

if(process.argv[2]){
	setTimeout(function(){
		process.exit(0);
	}, Number(process.argv[2]));
}
process.on('exit', function(){
	console.log('program exit');
});
console.log('end of program');