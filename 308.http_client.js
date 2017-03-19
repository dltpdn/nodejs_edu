var http = require('http');

var opt = {
	host : 'www.naver.com'
};
var req = http.request(opt);
req.end();

req.on('connect', function() {
	console.log('connected.');
});
req.on('response', function(res) {
	console.log(res.statusCode);
	console.log(res.headers);
	res.on('data', function(chunk) {
		console.log('body----------------');
		console.log(chunk.toString());
	});
});

req.on('error', function(e) {
	console.log('err:' + e);
});