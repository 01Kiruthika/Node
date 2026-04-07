const http = require('http')
const routerfunction = require('./router.js')


const myserver = http.createServer(routerfunction)



myserver.listen(8000, () => {
    console.log("Server Start http://localhost:8000/");

})