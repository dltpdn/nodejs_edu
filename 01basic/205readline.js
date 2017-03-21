var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What your name? ", function(answer) {
    console.log("Hello, Mr(s)", answer);
     rl.close();
});
