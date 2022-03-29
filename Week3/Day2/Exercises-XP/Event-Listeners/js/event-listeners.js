let h1 = document.querySelector('h1');
console.log(h1);

function addBorder(event){
    h1.style.border = '1px solid red';
}

h1.onclick = addBorder;

function changeColorToRed (event) {
    h1.style.color = 'red';
}

h1.onmouseover = changeColorToRed; // works for me

function changeColorToBlue (event) {
    h1.style.color = 'blue';
}

h1.onmouseout = changeColorToBlue;


h1.addEventListener('onmousedown', (event)=>{
    h1.style.display = 'none';
})
