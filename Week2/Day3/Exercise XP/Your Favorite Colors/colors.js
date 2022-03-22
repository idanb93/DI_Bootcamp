let colors = ['blue', 'red', 'yellow', 'green', 'cyan'];
let suffixes = ['st', 'nd', 'rd', 'th'];

for (let i = 0; i < colors.length; i++){

    if (i < 3) {
        console.log(`My ${i+1}${suffixes[i]} choice is ${colors[i]} `);
    } else {
        console.log(`My ${i+1}${suffixes[3]} choice is ${colors[i]} `);
    }
}
