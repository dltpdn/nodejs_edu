const fs = require('fs');
let data = 'Hello world!';
fs.writeFileSync('text.txt', data, 'utf8');
console.log('file write completed');
