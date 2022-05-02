const http = require('http');
const date = require('../part3/main.js');

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'date': date.todayString });
    res.write('Hi there at the frontend\n');
    res.end('I am listening');
}).listen(8080);