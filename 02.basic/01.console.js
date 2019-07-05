//node console.js 2>error.log 1>info.log

console.log('stdout : console.log ');
console.error('stderr : console.error ');
console.warn('stderr : console.warn ');
console.info('stdout : console.info ');

console.log('abc', 'def', 123);
console.log('My name is %s I am %d years old', 'Lee', 27);
console.dir({name:'Lee', age:27});
console.trace('trace');


console.assert(true, 'OK');
//console.assert(false, 'Fail');

console.time('check');
let i;
for(i = 1; i <=10000; i++){
	i*=i;
}

console.log('result : %d', i);
console.timeEnd('check');

const fs = require('fs');
let logger = new console.Console(fs.createWriteStream('./log.txt'), fs.createWriteStream('./err.txt'));
logger.log('this is log');
logger.error('this is err');

