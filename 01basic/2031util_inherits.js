var util = require('util');

function Super() {
	this.name = "super";
}
Super.prototype.sayHello = function() {
	console.log(this.name);
}

function Sub() {

}

util.inherits(Sub, Super);
var sub = new Sub();
sub.sayHello();
console.log(sub instanceof Super);