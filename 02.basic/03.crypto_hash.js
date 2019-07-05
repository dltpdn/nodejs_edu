const crypto = require('crypto');

console.log(crypto.getHashes());
let hash= crypto.createHash('sha512');//crypto.getHashes()
hash.update('content data input');
let output = hash.digest('hex');// {hex, binary, base64}

console.log(output); //a166d63146eda560b710b4a7c9620a5b6e552430
