const fs = require('fs');

fs.readFile('README.txt', 'utf-8', (err, data)=>{
    if (err){
        console.error(err);
        return;
    }
    console.log(data);
})