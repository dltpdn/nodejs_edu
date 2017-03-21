var url = require('url');
var querystring = require('querystring');

var urlStr = 'https://www.google.co.kr/search?q=nodejs+url&oq=nodejs+url';
var urlObj = url.parse(urlStr);
console.log(querystring.parse(urlObj.query));