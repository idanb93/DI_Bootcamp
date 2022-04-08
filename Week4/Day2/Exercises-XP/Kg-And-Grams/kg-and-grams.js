function weightInGrams(weightInKiloGrams){
    return weightInKiloGrams *= 1000;
}

console.log(weightInGrams(5));

let weightInGrams2 = function(weightInKiloGrams){
    return weightInKiloGrams *= 1000;
}

console.log(weightInGrams2(9));

// function declaration will be hoisted.
// function expression is annonymous it does not have a name, it is being assigned to a variable
// and that's how it is being called.

const weightInGrams3 = (kilogramsWeight)=>{return kilogramsWeight *= 1000;};
console.log(weightInGrams3(3));