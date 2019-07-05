const fs = require('fs');

console.log("insert your name:")
process.stdin.setEncoding('utf8')
//process.stdin.pause();
process.stdin.resume();
var buff = Buffer.alloc(10);
var val = fs.readFileSync(0, 100, 0, 'utf8');P
console.log(process.stdin.fd);
console.log("input:", val);