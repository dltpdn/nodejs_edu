function getA(cb){
//    var v = parseInt(Math.random() * 10);
    process.stdout.write('insert a number :');
    process.stdin.once('data', (data)=>{
        var v = parseInt(data.toString());
        console.log(v);
        cb(v);
        //process.stdin.end();
    });
    //return v;
}

function getP(){
    return new Promise((res)=>{
        process.stdout.write('insert a number :');
        process.stdin.resume();
        process.stdin.on('data', (data)=>{
            process.stdin.pause();
            var v = parseInt(data.toString());
            console.log(v);
            res(v);
        });
        //return v;

    });
    //    var v = parseInt(Math.random() * 10);
}
    

function plus(a, b){
    return a + b;
}

async function f(){
    var a = await getP();
    var b = await getP();
    var c  = plus(a, b);
    console.log(c);
    process.exit(0);
}
f();
/*
getA((v)=>{
    var a = v;
    getA((v)=>{
        var b = v;
        var c = plus(a, b);
        console.log(c);
        process.exit(0);
    });
});
*/