const path = require('path');

console.log('path.sep: ', path.sep);
console.log('path.delimeter: ', path.delimeter);
console.log('path.dirname(): ', path.dirname(__filename));
console.log('path.extname(): ', path.extname(__filename));
console.log('path.basename(): ', path.basename(__filename));
console.log('path.basename(): ', path.basename(__filename, path.extname(__filename)));
console.log('path.parse(): ', path.parse(__filename));
console.log('path.isAbsolute(): ', path.isAbsolute(__filename));
console.log('path.join(): ', path.join('users', 'node', 'app'));
console.log('path.relative(): ', path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb'));