let words = prompt('Please enter a few words seperated by commas: ');
let wordsArray = words.split(',');

let longestStringInTheArray = wordsArray[0];

for (let word of wordsArray){
    if (word.length > longestStringInTheArray.length){
        longestStringInTheArray = word;
    }
}

let upperAndLowerStarsPadding = longestStringInTheArray.length+4
console.log("*".repeat(upperAndLowerStarsPadding));

for (let word of wordsArray){
    console.log(`* ${word}` + ' '.repeat(upperAndLowerStarsPadding - word.length-3) + '*');
}

console.log("*".repeat(upperAndLowerStarsPadding));
