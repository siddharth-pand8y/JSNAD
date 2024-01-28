const {Buffer} = require('node:buffer');
const buf = Buffer.alloc(5, 5, 'utf-8');
console.log(buf.toString());