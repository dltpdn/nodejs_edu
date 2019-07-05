const fs = require('fs');

let f_name = process.argv[2]
console.log(f_name);

let f_writer = fs.createWriteStream('./' + f_name);


process.stdin.on('data', function(data){
    console.log(data);
    if(data.toString().startsWith("exit")){
        process.stdin.unpipe();
        f_writer.close();
        process.stdin.end();        
    }
    // f_writer.write(data.toString());
    
});

process.stdin.pipe(f_writer)
console.log('end of file');
