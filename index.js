const http = require('http') 

http.createServer(function(req, res) {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h1> hola mundo desde nodeJS te quiero mucho<h1/>')
    res.end()
}).listen(3000)
