var addon = require('./build/Release/addon' );
console.log(addon);
console.log(addon.prop); // 'world'
console.log(addon.method());