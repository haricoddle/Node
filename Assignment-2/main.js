const http = require('http');
const port = 3000;

// Creating an API to console my name
http.createServer( (req, res) => {
    console.log('Hi my name is Hari');
    res.end();
}).listen(port, (error) => {
if(error) {
    console.log(error);
} else {
    console.log('server listening on port'+port);
}
});