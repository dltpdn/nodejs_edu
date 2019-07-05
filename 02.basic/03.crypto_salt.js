const crypto = require('crypto');

const pwd = 'hello world';

crypto.pbkdf2(pwd, 'salt', 100000, 64, 'sha512', (err, derivedKey) => {
	  if (err) throw err;
	  console.log('pbkdf2: ', derivedKey.toString('hex')); 
});

const key = crypto.pbkdf2Sync(pwd, 'salt', 100000, 64, 'sha512');
console.log('pbkdf2Sync: ', key.toString('hex'));  


crypto.scrypt(pwd, 'salt', 64, (err, derivedKey) => {
	  if (err) throw err;
	  console.log('scrypto:' , derivedKey.toString('hex'));  
	});

const key1 = crypto.scryptSync(pwd, 'salt', 64);
console.log('scryptoSync: ', key1.toString('hex'));  
