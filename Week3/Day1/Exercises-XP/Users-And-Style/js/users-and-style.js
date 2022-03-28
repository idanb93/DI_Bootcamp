
// Add a “light blue” background color and some padding to the <div>.

let divs = document.getElementsByTagName('div');

divs[0].style.backgroundColor = 'lightblue';
divs[0].style.padding = '12px 12px 12px 12px';

// Do not display the first name (John) in the list.

let uls = document.getElementsByTagName('ul');
uls[0].firstElementChild.setAttribute('hidden', true);

// Add a border to the second name (Pete).

let ulsChildren = uls[0].children;
ulsChildren[1].style.border = '1px solid red';

// Change the font size of the whole body.
document.body.style.fontSize = '50px';