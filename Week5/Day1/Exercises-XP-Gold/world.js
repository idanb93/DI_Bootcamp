
let body = document.body;

let newDiv = document.createElement('div');
let p1 = document.createElement('p');
p1.textContent = window.location.search;
newDiv.appendChild(p1);
body.appendChild(newDiv);