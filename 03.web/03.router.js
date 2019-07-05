const express = require('express');

let app = express();
let router = express.Router();
router.get('/events', function(req, res){
	res.send('<h1>event</h1>');
});

app.use('/calendar', router);

app.listen(9999, function(){
	console.log('server is running on 9999.');
});

//access with '/calendar/events'