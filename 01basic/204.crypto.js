var crypto = require('crypto');

var hash= crypto.createHash('sha1');//crypto.getHashes()
hash.update('content data input');
var output = hash.digest('hex');// {hex, binary, base64}

console.log(output); //a166d63146eda560b710b4a7c9620a5b6e552430
