const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: fs.createReadStream('./207.event.js')
});
var cnt=1;
rl.on('line', function(line){
  console.log(cnt++ +':', line);
});