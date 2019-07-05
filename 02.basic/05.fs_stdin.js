const fs = require('fs');

process.stdin.pause();
process.stdout.write(">");
let buff = Buffer.alloc(100)
let val = fs.readSync(process.stdin.fd, buff, 0, "utf8");
//var val = process.stdin.read(256);
console.log(val);
