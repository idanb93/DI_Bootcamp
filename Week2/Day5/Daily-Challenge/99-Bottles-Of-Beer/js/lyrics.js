let userNumber = Number(prompt('Please enter a numeber: '));
let count = 1;
let bottlesAfterTheDecrease = 0;

console.log();

while (userNumber > 0) {

    bottlesAfterTheDecrease = userNumber-count;

    if (bottlesAfterTheDecrease < 0){
        bottlesAfterTheDecrease = 'no';
    }

    console.log(`${userNumber} bottles of beer on the wall`);
    console.log(`${userNumber} bottles of beer`);
    console.log(`Take ${count} down, pass it around`);
    console.log(`${bottlesAfterTheDecrease} bottles of beer on the wall`);
    console.log('\n');

    userNumber -= count;
    count++;
}