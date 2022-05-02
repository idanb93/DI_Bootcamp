const express = require('express');
const app = express();

app.get('/:id', (req, res)=>{

    const id = req.params.id;

    let newObj = {
        id,
    }

    console.log(newObj);
    res.json(newObj);
    res.end();

})

app.listen(3000, ()=>{
    console.log('Server running on port 3000');
})