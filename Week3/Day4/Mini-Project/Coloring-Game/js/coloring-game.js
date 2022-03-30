// colorBoxes = document.getElementsByClassName('color-box');

// for (let box of colorBoxes){
//     box.style.background = '#' + Math.floor(Math.random() * 16777215).toString(16);
// }

let color_col = 3;
let color_row = 8;
let color_count = color_col * color_row;

let main_col = 60;
let main_row = 40;
let main_count = main_col * main_row;

let sidebar = document.querySelector('#sidebar');
let main = document.querySelector('#main');
let clear = document.querySelector('#clear');
let body = document.getElementsByTagName('body')[0];

let color = null; // the color the user choosed
let mousedown = false;

for (let i = 0; i < color_count; i++) {
    let div = document.createElement('div');
    div.style.backgroundColor = generateRandomColor();
    div.addEventListener('click', function(event){
        color = event.target.style.backgroundColor;
    });
    sidebar.appendChild(div);
}

for (let i = 0; i < main_count; i++) {
    let div = document.createElement('div');
    div.addEventListener('mousedown', function(event){
        if (color !== null){
            event.target.style.backgroundColor = color;
        }
    });
    div.addEventListener('mouseover', function(event){
        if (color !== null && mousedown){
            event.target.style.backgroundColor = color;
        }
    });
    main.appendChild(div);
}

body.addEventListener('mousedown', function(event){
    mousedown = true;
})

body.addEventListener('mouseup', function(event){
    mousedown = false;
})

function generateRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

// clear.onclick = ;