var fs = require('fs');

var data = fs.readFileSync('text.txt', 'utf8');
console.log(data);
