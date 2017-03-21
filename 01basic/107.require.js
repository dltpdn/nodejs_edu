var mymodule = require('./107.exports.js');
var mymodule1 = require('mymodule1.js');
var mymodule2 = require('mymodule2');
var mymodule3 = require('mymodule3');
var os = require('os');

console.log("plus : "+ mymodule.plus(10, 20));
console.log("sum :" + mymodule.sum(1,2,3,4,5,6,7,8,9,10));

mymodule1.sayHello();
mymodule2.sayHello();
mymodule3.sayHello();

console.log(mymodule3 === require('mymodule3'));

console.log(os);
//console.log(os.sayHello());