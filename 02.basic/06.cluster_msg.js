const cluster = require('cluster');
const http = require('http');

if (cluster.isMaster) {
	console.log(`master pid : ${process.pid}`);
  let numReqs = 0;
  const numCPUs = require('os').cpus().length;
  for (let i = 0; i < numCPUs; i++) {
	  let worker = cluster.fork();
	  worker.on('exit', function(code, signal){
    		console.log(`${this.process.pid} killed.` );
	  });
      worker.on('message', function (msg) {
	    if (msg.url) {
	        numReqs += 1;
	        console.log(`numReqs:${numReqs}, url:${msg.url}`);
	    }
      });	
  }
} else {
	console.log(`pid : ${process.pid}`);
  http.Server((req, res) => {
    res.writeHead(200);
    res.end('hello world\n');

    process.send({ url: req.url });
  }).listen(8000)
  .on('error', (err)=>{
	  console.error(err, process.pid);
	 process.exit(-1);
  });
}