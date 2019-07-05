let timer = setInterval(function(){
	console.log(new Date());
}, 1000);

console.log(timer);
setTimeout(function(){
	clearInterval(timer);
}, 5000);