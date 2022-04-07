[2] === [2]; // false
({} === {}); // false

const object1 = { number: 5 }; // 4
const object2 = object1; // 4
const object3 = object2; // 4
const object4 = { number: 5}; // 5
object1.number = 4;

class Animal {
    constructor(name, type, color){
        this.setName(name);
        this.setType(type);
        this.setColor(color);

    }

    setName = (name) => name ? this.name = name : null;
    setType = (type) => type ? this.type = type : null;
    setColor = (color) => color ? this.color = color : null;
}

class Mamal extends Animal {
    constructor(name, type, color){
        super(name, type, color);
    }

    sound(sound){
        let animalDetails = {
            name: this.name,
            type: this.type,
            color: this.color,
            sound: sound,
        };

        return animalDetails;

    }
}

let mamal = new Mamal();
console.log(mamal.sound('Myeoo'));

let cow = new Mamal('Hava', 'Cow', 'Black-White');
console.log(cow.sound('Mooooo'));
