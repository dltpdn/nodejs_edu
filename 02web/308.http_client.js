var http = require('http');

var opt = {
	host : 'www.naver.com',
	port : 80,
	method : 'GET',
	path : '/'
};
var req = http.request(opt,function(res) {
	console.log(res.statusCode);
	console.log(res.headers);
	res.on('data', function(chunk) {
		console.log('body----------------');
		console.log(chunk.toString());
	});
	res.on('end', function(){
		console.log('-----------end of body');
	});
}); //http.clientRequests
req.end();

req.on('error', function(e) {
	console.log('err:' + e);
});