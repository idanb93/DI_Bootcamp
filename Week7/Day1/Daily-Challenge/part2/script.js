const http = require('http');
const {largeNumber} = require('../part1/main');
const {b} = require('../part1/script');

const server = http.createServer((req, res)=>{
    // res.end(res.getHeader('part1 result'));
    // res.end('I am listening');
    // res.writeHead(200, {largeNumber: 'text/plain'});

    res.writeHead(200, {'Part1': largeNumber + b});
    res.write('Hi there at the frontend\n');
    res.end('I am listening');
});

server.listen(3000);
