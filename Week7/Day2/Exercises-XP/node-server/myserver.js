const http = require('http');

const server = http.createServer((req, res)=>{

    // let h2 = document.createElement('h2');
    // h2.textContent = 'Hello this is the second time i\'m creating an HTTP server';
    res.write(

        `<html>
            <body>
                <h2>Hello this is the second time I'm creating an HTTP server</h2>
                <h2>Node.js is really fun to use</h2>
                <h2>Goodbye for now</h2>
            </body>
        </html>`
        );

    res.end();

})

server.listen(3000);