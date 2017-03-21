"use strict"
function dosomething(a, b) {
	process.nextTick(function() {
		console.log('dosomething...');
	})
	return a + b;
}

var r = dosomething(1, 2);
console.log(r);



setTimeout(function(){
	for(let i=0; i<100; i++){
		console.log(i);
	}
}, 0);
process.nextTick(function(){
	for(let i=0; i<100; i++){
		console.log('\t'+i);
	}
});

console.log('another job.');