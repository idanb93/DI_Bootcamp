let family = {
    members: 5,
    ages: [28, 36, 40, 62, 64],
}

let familyKeys = Object.keys(family);
console.log('The keys of the object \'family\' are: ');

familyKeys.forEach( (key)=>{
    console.log(key);
});

let familyValues = Object.values(family);
console.log('The values of the object \'family\' are: ');

familyValues.forEach( (value)=>{
    console.log(value); 
})