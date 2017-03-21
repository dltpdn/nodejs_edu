var async = require('async');
async.waterfall([ 
   function(callback) {
	   console.log('1st callback');
	   console.log(arguments);
	   callback(null, 'one', 'two');
   },
   function(arg1, arg2, callback) {
	   console.log('2nd callback');
	   console.log(arg1 +"," + arg2);
	   callback(null, 'three');
   },
   function(arg1, callback) {
	   console.log('3rd callback');
	   console.log(arguments);
	   callback(null, 'done');
   }
 ], function(err, results) {
	console.log('last callback');
	console.log(arguments);
});