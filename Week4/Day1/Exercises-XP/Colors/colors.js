let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let violetAppeared = false;

colors.forEach ( (element, index, array)=>{

    process.stdout.write(`#${index+1} choice is ${element}.`);
    if (element === 'Violet') violetAppeared = true;
});

console.log();

if (violetAppeared){
    console.log('Yeah');
} else {
    console.log('No...');
}