const os = require("os")

console.log("Architecture=====>",os.arch());
console.log("Platform=====>",os.platform());
console.log("Type=====>",os.type());
console.log("Release=====>",os.release());
console.log("HostName=====>",os.hostname());
console.log("MY Uptime=====>",Math.round(os.uptime()/ 60),"MIN");
console.log("Total Memory=====>",Math.round(os.totalmem()/1024**3),"GB");
console.log("Free Memory=====>",Math.round(os.freemem()/1024**2),"MB");
console.log("Home Directory=====>",os.homedir());
console.log("Temporay Directory=====>",os.tmpdir());


console.log(os.cpus());
console.log(os.cpus().length);
console.log(os.cpus()[0].speed);



