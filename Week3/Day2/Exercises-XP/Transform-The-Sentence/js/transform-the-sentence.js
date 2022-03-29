// Create a global variable named allBoldItems.

let allBoldItems;

// Create a function called getBold_items() that takes no parameter.
// This function should collect all the bold items inside the paragraph
// and assign them to the allBoldItems variable.

function getBold(){
    let boldItems = document.getElementsByTagName('strong');
    allBoldItems = boldItems;
}

getBold();

// Create a function called highlight()
// that changes the color of all the bold text to blue.

function highlight() {
    for (let item of allBoldItems){
        item.style.color = 'blue';
    }
}

// Create a function called return_normal()
// that changes the color of all the bold text back to black.

function return_normal(){
    for (let item of allBoldItems){
        item.style.color = 'black';
    }
}

// Call the function highlight() onmouseover
// (ie. when the mouse pointer is moved onto the paragraph)
// Call the function return_normal() onmouseout
// (ie. when the mouse pointer is moved out of the paragraph)

let p = document.querySelector('p');

p.onmouseover = highlight;
p.onmouseout = return_normal;