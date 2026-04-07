const http = require('http')
const fs = require('fs')

let requestfunction = (req, res) => {

  let myurl = req.url

  console.log(myurl);


  if (myurl === "/") {
    res.writeHead(200, {
      'content-type': 'text/plain'
    })
    res.end("Hello I am From Server")
  } else if (myurl === '/home') {
    res.writeHead(200, {
      'content-type': 'text/html'
    })

    // res.write("<html>")
    // res.write("<head>")
    // res.write("<title>Practice HTTP</title>")
    // res.write("</head>")
    // res.write("<body>")
    // res.write("<h1>Hello,Welcome to Node js</h1>")
    // res.write("<h3>About Me</h3>")
    // res.write("<p>Node.js is a free, open-source, cross-platform JavaScript runtime environment that allows developers to execute JavaScript code outside of a web browser</p>")
    // res.write("</body>")
    // res.write("</html>")

    let htmlfile = fs.readFileSync('index.html', {
      'encoding': 'utf-8'
    })
    res.write(htmlfile)
    res.end()
  } else if (myurl === '/style.css') {
    res.writeHead(200, {
      'content-type': 'text/css'
    })

    let cssfile = fs.readFileSync('style.css', {
      'encoding': 'utf-8'
    })
    res.write(cssfile)
    res.end()

  } else if (myurl === '/contact') {
    res.writeHead(200, {
      'content-type': 'application/json'
    })

    let jsonfile = `[
  {
    "title": "Yamaha R15 V4",
    "description": "A sporty 155cc bike with aggressive styling and advanced features like traction control.",
    "price": 185000,
    "image": "https://example.com/images/yamaha-r15.jpg"
  },
  {
    "title": "Royal Enfield Classic 350",
    "description": "A retro cruiser with a 349cc engine, known for comfort and classic looks.",
    "price": 193000,
    "image": "https://example.com/images/classic-350.jpg"
  },
  {
    "title": "KTM Duke 200",
    "description": "A powerful naked bike with a 200cc engine and sharp styling.",
    "price": 197000,
    "image": "https://example.com/images/ktm-duke-200.jpg"
  },
  {
    "title": "Honda CB Shine",
    "description": "A reliable 125cc commuter bike with excellent mileage.",
    "price": 85000,
    "image": "https://example.com/images/honda-shine.jpg"
  },
  {
    "title": "TVS Apache RTR 160",
    "description": "A sporty commuter with race-inspired performance and design.",
    "price": 120000,
    "image": "https://example.com/images/tvs-apache-160.jpg"
  },
  {
    "title": "Bajaj Pulsar NS200",
    "description": "A performance-oriented 200cc bike with aggressive looks and strong power.",
    "price": 155000,
    "image": "https://example.com/images/pulsar-ns200.jpg"
  },
  {
    "title": "Hero Splendor Plus",
    "description": "A highly fuel-efficient and affordable commuter bike for daily use.",
    "price": 75000,
    "image": "https://example.com/images/splendor-plus.jpg"
  },
  {
    "title": "Suzuki Gixxer SF",
    "description": "A fully-faired bike with sporty styling and a refined 155cc engine.",
    "price": 140000,
    "image": "https://example.com/images/gixxer-sf.jpg"
  },
  {
    "title": "Honda Hornet 2.0",
    "description": "A muscular streetfighter with a 184cc engine and modern features.",
    "price": 140000,
    "image": "https://example.com/images/hornet-2.jpg"
  },
  {
    "title": "TVS Raider 125",
    "description": "A stylish commuter with a 125cc engine and modern digital features.",
    "price": 95000,
    "image": "https://example.com/images/tvs-raider.jpg"
  }
]`

    res.end(jsonfile)
  } else if (myurl === '/video') {
    const readStream = fs.createReadStream('./video/Nature1.mp4')
    // console.log(readStream);

    res.writeHead(200, {
      'content-type': 'video/mp4'
    })
    readStream.pipe(res)
    // res.end()
  } else if (myurl === '/image') {
    const readStream = fs.createReadStream('./Image/img.png')
    res.writeHead(200, {
      'content-type': 'image/png'
    })
    readStream.pipe(res)
    // res.end()
  } else {
    res.writeHead(404, {
      'content-type': 'text/plain'
    })
    res.end("Sorry,File Not Found")
  }

}


const server = http.createServer(requestfunction)

server.listen(7005, () => {
  console.log("Server will Start http://localhost:7005/");

})