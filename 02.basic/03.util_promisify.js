const util = require('util');

function cbfn(a, b, cb){
	try{
		let ret = a + b;
		setImmediate(cb, null, ret);
	}catch(e){
		setImmediate(cb, e);	
	}
	
}

cbfn(1, 2, (err, ret)=>{
	console.log("callback pattern function: ", ret);
});

let cb_promise = util.promisify(cbfn);
cb_promise(1, 2)
.then((ret)=>{
	console.log("promise pattern function: ", ret);
})
.catch((err)=>{
	console.log('err');
});

async function callcbfn(){
	let ret = await cb_promise(1,2);
	console.log('asyn-await: ', ret)
}
callcbfn();