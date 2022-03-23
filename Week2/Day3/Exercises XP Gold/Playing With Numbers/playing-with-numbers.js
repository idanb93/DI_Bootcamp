let age = [20,5,12,43,98,55];
let highestAge = age[0];
let sum = 0;

for (let i = 0; i < age.length; i++){
    if (age[i] > highestAge){
        highestAge = age[i];
    }
    sum += age[i];
}

console.log(highestAge);