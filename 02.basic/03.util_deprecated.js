const util = require('util');

function oldFn(a, b){
	let ret = a + b;
	console.log("this is oldFn()");
	return ret;
}

var oldFn = util.deprecate(oldFn, 'oldFn is deprecated do not use anymore.');

let ret = oldFn(1,2);
console.log('ret:', ret);