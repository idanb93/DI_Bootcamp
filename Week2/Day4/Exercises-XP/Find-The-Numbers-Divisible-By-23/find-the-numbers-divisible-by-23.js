function isDivisible(divisor) {
    let sumOfNumbersDivisibleByTheDivisor = 0;
    for (let i = 0; i <= 500; i++){
        if (i % divisor === 0){
            sumOfNumbersDivisibleByTheDivisor += i;
            console.log(i);
        }
    }

    console.log(`the sum of all the numbers that are divisible by 23 is: ${sumOfNumbersDivisibleByTheDivisor}`);
}

isDivisible(3);
isDivisible(45);