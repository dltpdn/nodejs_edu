var buff = new Buffer(1024);
console.log(buff.length);
console.log(buff[0]); // garbage value

buff[0] = 1;
buff[1] = 2;
buff[2] = 255;
buff[3] = 256;

console.log(buff[0]);
console.log(buff[1]);
console.log(buff[2]);
console.log(buff[3]);

var buff2 = new Buffer("ABCDabcd");
console.log(buff2[0]);
console.log(buff2[1]);
console.log(buff2);
console.log(buff2.toString());

var buff3 = buff2.slice(0, 4);
console.log(buff3.toString());

var buff4 = new Buffer(buff2.length);
buff2.copy(buff4, 0, 0, buff2.length);
console.log(buff4.toString());