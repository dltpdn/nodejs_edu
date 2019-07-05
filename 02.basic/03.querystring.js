const url = require('url');
const querystring = require('querystring');

let urlStr = 'https://www.google.co.kr/search?q=nodejs+url&oq=nodejs+url';
let urlObj = url.parse(urlStr);
console.log('urlObj.query: ', urlObj.query);
let queryParsed = querystring.parse(urlObj.query);
console.log('querystring.parse(urlObj.query): ', queryParsed);
console.log('querystring.stringify(queryParsed): ', querystring.stringify(queryParsed));