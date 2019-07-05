global.x = 5;
var y = 10;

debugger;
function fn(){
	x++;
	y++;
	console.log("this is function fn.", x, y);
}

fn();

setInterval(fn, 1000);

setTimeout(()=>{
	debugger;
	console.log('world.');
}, 1000);

console.log('hello');