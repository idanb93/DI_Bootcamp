let ulElements = document.getElementsByTagName('ul');

// change the name “Pete” to “Richard”.

let firstUl = ulElements[0];
let lastElementChildOfFirstUl = firstUl.lastElementChild;
lastElementChildOfFirstUl.textContent = "Richard";

// Change each first name of the two <ul>'s to your name.

for (let ul of ulElements){
    ul.firstElementChild.textContent = "Idan";
}

// At the end of each <ul> add a <li> that says “Hey students”.

for (let ul of ulElements){
    let newLi = document.createElement('li');
    newLi.textContent = "Hey students"
    ul.appendChild(newLi);
}

// Delete the name Sarah from the second <ul>.

let secondUl = ulElements[1];
let secondUlChildren = secondUl.children;
secondUl.removeChild(secondUlChildren[1]);

