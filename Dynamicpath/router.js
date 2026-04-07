const fs = require('fs')
const path = require('path')


let routerfunction = (req, res) => {

    let filepath;
    let contentType;


    let myurl = req.url

    if (myurl === '/home') {

        filepath = path.join(__dirname, 'index.html')
        contentType = 'text/html'


    } else if (myurl === '/style.css') {

        filepath = path.join(__dirname, "style.css")
        contentType = 'text/css'

    } else {
        res.writeHead(404, {
            'content-type': 'text/plain'
        })
        res.end("Sorry,File Not Found")
        return
    }


    fs.readFile(filepath, {
        'encoding': 'utf-8'
    }, (err, data) => {

        if (err) {
            res.writeHead(500, {
                'content-type': 'text/plain'
            })
            res.end("Sorry,Internal Server Error")
            return
        }


        res.writeHead(200, {
            'content-type': contentType
        })
        res.end(data)

    })

}


module.exports = routerfunction