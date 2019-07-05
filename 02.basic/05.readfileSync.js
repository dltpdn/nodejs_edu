const fs = require('fs');

let data = fs.readFileSync('text.txt', 'utf8');
console.log(data);
