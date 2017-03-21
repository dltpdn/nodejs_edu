var fs = require('fs');

fs.readFile('text.txt', 'utf8', function(error, data){
  console.log(data);
});
