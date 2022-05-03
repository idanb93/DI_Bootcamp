// Imports

const express = require('express');
const {user} = require('./modules/data');

// Creating a server using express.js

const app = express();

app.listen(3000, ()=>{
    console.log('Server is listening on port 3000');
})

// Serving the static files in the public folder

app.use('/', express.static(__dirname+'/public'));

// Creating routes

app.get('/users', (req, res)=>{
    res.json(user);
    res.end();
})