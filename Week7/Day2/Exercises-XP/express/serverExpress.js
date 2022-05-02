const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.write(
        `<html>
            <body>
                <h2>Hello from my express server</h2>
            </body>
        </html>`
    );
    res.end();

}).listen(3000);