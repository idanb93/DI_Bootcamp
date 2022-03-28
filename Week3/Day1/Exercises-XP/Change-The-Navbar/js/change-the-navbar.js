let navbar = document.getElementById('navBar');

navbar.setAttribute('id', 'socialNetworkNavigation');

let newLi = document.createElement('li');
let newTextNode = document.createTextNode('Logout');
newLi.append(newTextNode);

let ulElement = document.getElementsByTagName('ul');
ulElement[0].appendChild(newLi);

let AnchorElements = document.getElementsByTagName('a');
let lastElementChildOfUl = ulElement[0].lastChild;

console.log(AnchorElements[0].textContent);
console.log(lastElementChildOfUl.textContent);