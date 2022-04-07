const users = {
    user1: 18273,
    user2: 92833,
    user3: 90315,
}
// [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]

let usersAsAnArray = Object.entries(users);
console.log(usersAsAnArray);

let usersAsAnArray2 = [];

let usersKeys = Object.keys(users);
let usersValues = Object.values(users);

for (let i = 0; i < usersKeys.length; i++){
    usersAsAnArray2.push(usersKeys[i]);
    usersAsAnArray2.push(usersValues[i]*2);
}

console.log(usersAsAnArray2);