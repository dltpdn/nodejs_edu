var async = require('async');
	async.series([
		function(callback) {
			console.log('1st callback');
			console.log(arguments);
			callback(null, 'one');
		},
		function(callback) {
			console.log('2nd callback');
			console.log(arguments);
			callback(null, 'two');
		}
	],
	function(err, results) {
		console.log(arguments);
	});