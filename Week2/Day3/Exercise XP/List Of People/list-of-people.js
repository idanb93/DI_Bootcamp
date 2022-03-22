// Part 1

let people = ["Greg", "Mary", "Devon", "James"]

// Write code to remove “Greg” from the people array.
let gregIndex = people.indexOf('Greg');
people.splice(gregIndex, 1);

// Write code to replace “James” to “Jason”.
let jamesIndex = people.indexOf("James")
people[jamesIndex] = "Jason";

// Write code to add your name to the end of the people array.
people.push("Idan");

// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
let marysIndex = people.indexOf('Mary');
console.log(marysIndex);

// Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.
let newPeopleArray = people.slice(marysIndex+1, people.length-1);

// Write code that gives the index of “Foo”. Why does it return -1 ?
let fooIndex = newPeopleArray.indexOf('Foo'); // -1 because Foo is not in people array

// Create a variable called last which value is the last element of the array.
let last = newPeopleArray[newPeopleArray.length-1];

// Part 2

// Using a loop, iterate through the people array and console.log each person.

for (let person of people){
    console.log(person);
}

console.log();

// Using a loop, iterate through the people array and exit the loop after you console.log “Jason” .

for (let person of people){
    console.log(person);
    if (person === 'Jason') break;
}

