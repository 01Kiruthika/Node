const http = require('http')

let requestfunction = (req,res)=>{
    // console.log(req);
    

    res.end("Welcome to to the htttp Server")

}


const server = http.createServer(requestfunction)

server.listen(7000,()=>{
    console.log("Server will Start http://localhost:7000/");
    
})