let file = require('fs')

// // Sync File 
// file.writeFileSync("myfile.txt","Welcome to Node js")
// file.writeFileSync("./inside/file.txt","Hi I am Node js")

// let readfile = file.readFileSync("myfile.txt",{encoding : "utf-8"})
// let readfile1 = file.readFileSync("./inside/file.txt",{encoding : "utf-8"})

// console.log(readfile);
// console.log(readfile1);

// console.log("Written Sucessfully");


//Async File
console.log("File Start!!!!");


file.writeFile("myfile.txt","Welcome hello....",()=>{
    console.log("Written Success");
})


file.readFile("./inside/file.txt",{encoding : "utf-8"},(err,data)=>{
    console.log(data);
})


console.log("Processing....");


