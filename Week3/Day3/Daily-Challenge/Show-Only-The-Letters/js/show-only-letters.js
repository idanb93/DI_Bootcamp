
let inputLabel = document.createElement('label');
inputLabel.textContent = "Please enter some letters: ";
document.body.appendChild(inputLabel);

let input = document.createElement('input');
input.setAttribute('pattern', "/^[a-zA-Z]+$/");
document.body.appendChild(input);


// input.onkeyup = keyup;

// function keyup(){
//     this.value = this.value.replace(/^[a-zA-Z]+$/,'');  
// }

let submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.textContent = 'Submit';
submitButton.style.marginLeft = '10px';
submitButton.style.height = '20px';
submitButton.style.width = '70px';
document.body.appendChild(submitButton);