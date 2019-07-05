const url = require('url');
let urlStr = 'https://www.google.co.kr/search?q=nodejs+url&oq=nodejs+url#abcd';

const urlObj = new url.URL(urlStr);
console.log("new URL(): " , urlObj);
console.log("urlObj.toString():", urlObj.toString());

console.log('-'.repeat(80));

const urlParsed = url.parse(urlStr);
console.log("url.parse(): ", urlObj);
console.log("url.format(): ", url.format(urlParsed));


console.log('-'.repeat(80));
console.log("urlObj.searchParams: ", urlObj.searchParams);
		
const searchParam = new url.URLSearchParams("page=3&limit=10&category=node&category=js");
console.log("new URLSearchParams() ", searchParam);
console.log("searchParam.keys(): ", searchParam.keys());
console.log('searchParam.get("page"): ', searchParam.get('page'));
console.log('searchParam.get("category"): ', searchParam.get('category'));
console.log('searchParam.getAll("category"): ', searchParam.getAll('category'));
searchParam.set('page', 9);
console.log('searchParam.get("page", 9): ', searchParam.get('page'));
console.log('searchParam.toString(): ', searchParam.toString());



