var event = require('events');
var evt = new event.EventEmitter();
evt.on('custom', function(){
	console.log('custom event occurred');
});

evt.emit('custom');
