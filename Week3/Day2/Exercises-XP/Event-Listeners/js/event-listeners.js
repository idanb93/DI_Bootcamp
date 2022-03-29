let h1 = document.querySelector('h1');
console.log(h1);

h1.addEventListener('onmouseover', (event)=>{
    event.target.style.color = 'red';
});


h1.addEventListener('click', (event)=>{
    event.target.style.color = 'cyan';
});

h1.addEventListener('onmouseout', (event)=>{
    event.target.style.color = 'blue'; 
});

h1.addEventListener('onmousedown', (event)=>{
    h1.style.display = 'none';
})
