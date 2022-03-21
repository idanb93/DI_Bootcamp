// Exercise 1

let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

fruits.shift();
fruits.sort();
fruits.push("Kiwi");
let itemToRemove = fruits.indexOf("Apples");
fruits.splice(itemToRemove, 1);
fruits.reverse();

// let newFruites = fruits.filter( (value)=>{
//     if (value !== 'Apples'){
//         return value;
//     }
// })

// Exercise 2

let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(moreFruits[1][1][0]);

