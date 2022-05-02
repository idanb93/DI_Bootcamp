// Imports

const express = require('express');
const {user} = require('./modules/data');

// Creating a server using express.js

const app = express();

app.listen(3000, ()=>{
    console.log('Server is listening on port 3000');
})

app.use('/', express.static(__dirname+'/public'));

// Creating endpoints

app.get('/', (req, res)=>{
    // console.log(user);
    // const {firstname, lastname} = user;
    // res.status(200).send(`${firstname} ${lastname}`);
    res.send(JSON.stringify(user));
    res.end();
})