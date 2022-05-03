const fs = require('fs');

// fs.writeFile('menu.txt', 'Hello World!', (err)=>{
//     if (err){
//         console.error(err);
//         return;
//     } else {
//         console.log('Write operation completed');
//     }
// });

// fs.appendFile('menu.txt', ' This is 2022' + '\n', (err)=>{
//     if(err){
//         console.error(err);
//         return;
//     }
// });

fs.unlink('menu.txt', (err)=>{
    if(err){
        console.error(err);
        return;
    }
})