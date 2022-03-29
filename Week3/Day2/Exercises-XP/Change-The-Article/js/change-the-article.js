let h1s = document.getElementsByTagName('h1');
console.log(h1s); // HTML Collection [h1]

let H1 = document.querySelectorAll('h1');
console.log(H1); // NodeList [h1]

// Using a DOM property, retrieve the h1 and console.log it.

let firstH1 = document.querySelector('h1');
console.log(firstH1); // NodeList [h1]

// Using DOM methods, remove the last paragraph in the <article> tag.

let article = document.getElementsByTagName('article');
article[0].removeChild(article[0].lastElementChild);

// Add a event listener which will change the background color of the h2 to red,
// when it’s clicked on.
let h2 = document.getElementsByTagName('h2');
h2[0].addEventListener('click', (event)=>{
    h2[0].style.backgroundColor = 'red';
});

// Add an event listener which will hide the h3
// when it’s clicked on (use the display:none property).

let h3 = document.getElementsByTagName('h3');
h3[0].addEventListener('click', (event)=>{
    h3[0].style.display = 'none';
});

// Add a <button> to the HTML file, that when clicked on,
// should make the text of all the paragraphs, bold.

let ps = document.getElementsByTagName('p');
let button1 = document.createElement('button');
button1.style.height = '5vh';
button1.style.width = '20vw';
button1.textContent = 'Change paragraphs to bold';
button1.addEventListener('click', (event)=> {
    for (let i = 0 ; i < ps.length; i++){
        ps[i].style.fontWeight = 'bold'
    }
});

document.body.appendChild(button1);

// When you hover on the h1,
// set the font size to a random pixel size between 0 to 100.(Check out this documentation)

firstH1.addEventListener('mouseover', (event)=>{
    firstH1.style.fontSize = Math.floor(Math.random() * 101) + 'px';
});

// When you hover on the 2nd paragraph,
// it should fade out (Check out “fade css animation” on Google)

// ps[1].addEventListener('mouseover', (event)=>{
//     console.log(ps[1]);
//     ps[1].style.animationName = "fadeOut";
//     // ps[1].style.transition = 'opacity 2s';
// });