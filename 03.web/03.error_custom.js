const express = require('express');

let app = express();

app.get('/', function (req, res, next) {
  fs.readFile('/file-does-not-exist', function (err, data) {
    if (err) {
      next(err) // Pass errors to Express.
    } else {
      res.send(data)
    }
  })
});

app.use(function (err, req, res, next) {
	  console.error(err.stack)
	  res.status(500).send(`Error!: ${err}` );
	})

app.listen(8080);