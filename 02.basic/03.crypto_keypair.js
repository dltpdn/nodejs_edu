const crypto = require('crypto');
const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 4096,
  publicKeyEncoding: {
    type: 'pkcs1',
    format: 'pem'
  },
  privateKeyEncoding: {
    type: 'pkcs1',
    format: 'pem',
  }
});

console.log(publicKey, privateKey);

let encrypted = crypto.publicEncrypt(publicKey, Buffer.from('hello world'));
console.log('encrypted: ', encrypted);
let decrypted = crypto.privateDecrypt(privateKey, encrypted);
console.log('decrypted: ', decrypted.toString());

