var addon = require('./build/Release/hello' );
console.log(addon);
console.log(addon.prop); // 'world'
console.log(addon.method());