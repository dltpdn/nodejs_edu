var i = 0;
var interval = setInterval(function() {
	console.log(i++);
	if (i >= 10)
		clearInterval(interval);
}, 500)

for (var ii = 10; ii < 20; ii++) {
	(function(x) {
		setTimeout(function() {
			console.log(x);
		}, ii * 500)
	})(ii);
}
