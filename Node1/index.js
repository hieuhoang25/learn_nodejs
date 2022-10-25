var http = require('http');
var app = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    res.end('Chào bạn chúc an lành');
});
app.listen(8080);