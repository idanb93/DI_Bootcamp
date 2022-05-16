const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());


app.listen(5000, ()=>{
    console.log('Server is listening on port 5000');
})

app.post('/api/world', (req, res)=>{
    const {userInputValue} = req.body;
    res.send(`I received your POST request. This is what you sent me: ${userInputValue}`);
})

app.get('/api/hello', (req, res)=>{
    res.send('Hello From Express');
})
