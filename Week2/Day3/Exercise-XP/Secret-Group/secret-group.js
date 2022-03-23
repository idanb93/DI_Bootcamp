let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"]

let nameOfSociety = '';

for (let name of names){ 
    nameOfSociety += name[0]; }

let nameOfSocityAsAnArray = nameOfSociety.split('');
nameOfSocityAsAnArray.sort();
nameOfSociety = nameOfSocityAsAnArray.join('');

console.log(nameOfSociety);
