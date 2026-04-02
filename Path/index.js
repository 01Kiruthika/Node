//Path Module

let path = require('path')

let mypath = "user/src/File/inside/index.html"

// let bname = path.basename(mypath)
// console.log(bname);

// let dname = path.dirname(mypath)
// console.log(dname);

// let ename = path.extname(mypath)
// console.log(ename);

// console.log(__dirname);
// console.log(__filename);


let filepath = path.join(__filename,mypath,'data.js')
let filepath1 = path.join(__dirname,mypath,'node')

console.log(filepath);
console.log(filepath1);








