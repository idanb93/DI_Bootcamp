const express = require('express');
const app = express();

app.listen(3000, ()=>{
    console.log('Server is listening on 3000');
})

// Parsers

app.use(express.urlencoded({extended:true}));
app.use(express.json());

// Routes

app.get('/aboutMe/:hobby', (req, res)=>{
    const hobby = req.params.hobby;

    if (isNaN(parseInt(hobby))){
        res.send(req.params);
    } else {
        res.status(404).send('NOT FOUND');
    }
});

app.get('/pic', (req, res)=>{
    res.sendFile(__dirname+'/images/img.html');
})

app.get('/form', (req, res)=>{
    res.sendFile(__dirname+'/public/form.html');
})

app.post('/formData', (req, res)=>{
    const {email, message} = req.body;
    res.send(`${email} says: ${message}`);
})