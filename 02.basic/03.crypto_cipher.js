const crypto = require('crypto');

const algorithm = 'aes-192-cbc';
const iv = Buffer.alloc(16, 0);
const passwd = 'my key';
const data = 'hello world';
const key = crypto.scryptSync(passwd, 'salt', 24);
console.log('key:', key.toString('hex'));

const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update(data, 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log('encrypted: ', encrypted);

const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log('decrypted: ', decrypted);