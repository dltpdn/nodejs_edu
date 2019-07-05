const http = require('http');

let url = 'http://openapi.seoul.go.kr:8088/sample/xml/SearchSTNTimeTableByIDService/1/5/0151/1/1/';
let req = http.request(url, function(res) {
	console.log('status:', res.statusCode);
	console.log('header:', res.headers);
	res.on('data', function(chunk) {
		console.log('body----------------');
		console.log(chunk.toString());
	});
	res.on('end', function(){
		console.log('-----------end of body');
	});
}); 
req.end();

req.on('error', function(e) {
	console.log('err:' + e);
});