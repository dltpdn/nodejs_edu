var fs = require('fs');
var data = 'Hello World!';
fs.writeFile('text.txt', data, 'utf8', function(error){
  console.log('file write completed');
});
