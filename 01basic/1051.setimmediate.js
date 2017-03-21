setImmediate(function(){
	console.log('immediate.')
});

setTimeout(function(){
	console.log('timeout.')
}, 0);

setTimeout(function(){
	console.log('timeout-1.')
	setTimeout(function(){
		console.log('timeout-2.')
	}, 0);
	setImmediate(function(){
		console.log('immediate-1.')
	});
	setImmediate(function(){
		console.log('immediate-2')
	});

}, 0);
console.log('after timeout');

