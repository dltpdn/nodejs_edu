var calc = require('calculator');
console.assert(calc, "calc module Error");
console.assert(calc.plus, "calc.plus Error");
console.assert(calc.minus, "calc.plus Error");
console.assert(calc.multiply, "calc.plus Error");
console.assert(calc.divide, "calc.plus Error");

console.assert(calc.plus(1,2)===3, 'plus Error');
console.assert(calc.minus(5,2)===3, 'minus Error');
console.assert(calc.multiply(2,2)===4, 'multiply Error');
console.assert(calc.divide(4,2)===2, 'divide Error');
console.log('Well Done.');