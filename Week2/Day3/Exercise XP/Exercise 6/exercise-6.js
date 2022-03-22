let details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }

// console.log “my name is Rudolf the raindeer”

let detailsKeys = Object.keys(details);

detailsKeys.forEach( (key)=>{
    process.stdout.write(`${key} ${details[key]} `);
})