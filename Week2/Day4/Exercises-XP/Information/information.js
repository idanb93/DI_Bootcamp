// Part 1 

function infoAboutMe() {
    let name = 'Idan';
    let age = 28;
    let hobbies = ['programming', 'gym', 'karate'];
    
    console.log(`My name is ${name} and my age is ${age}.
    my hobbies are ${hobbies[0]}, ${hobbies[1]}, ${hobbies[2]} .`)
}

infoAboutMe();

// Part 2

function infoAboutPerson(personName, personAge, personFavoriteColor) {
    console.log(`Your name is ${personName} and you are ${personAge} years old.
    your favourite color is ${personFavoriteColor} .`)
}

infoAboutPerson("David", 45, "blue");
infoAboutPerson("Josh", 12, "yellow");

