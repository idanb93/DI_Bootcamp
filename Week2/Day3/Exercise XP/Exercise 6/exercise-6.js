let details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }

// console.log “my name is Rudolf the raindeer”

// for (key in details){
//   if (details.hasOwnProperty(key)){
//     process.stdout.write(`${key} ${details[key]} `);
//   }
// }

let detailsKeys = Object.keys(details);

detailsKeys.forEach( (key)=>{
    process.stdout.write(`${key} ${details[key]} `);
})