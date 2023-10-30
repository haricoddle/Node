const http = require('http');
const port = 3000;
const server = http.createServer(function(req, res){
    res.write('Hi myself Hari');
    res.end();
}).listen(port);