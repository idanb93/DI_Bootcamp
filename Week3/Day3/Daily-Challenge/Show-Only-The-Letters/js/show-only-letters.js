

// input.onkeyup = keyup;

// function keyup(){
//     this.value = this.value.replace(/^[a-zA-Z]+$/,'');  
// }

(function createPage() {

    let inputLabel = document.createElement('label');
    inputLabel.textContent = "Please enter some letters: ";
    document.body.appendChild(inputLabel);

    let input = document.createElement('input');
    document.body.appendChild(input);

    input.addEventListener('keyup', (event)=>{

        for (let i = 0; i < (input.value).length; i++ ){
            if ( (input.value).charCodeAt(i) < 48 || (input.value).charCodeAt(i) > 90){
                console.log((input.value).charCodeAt(i));
            }
        }
    })

    let submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.textContent = 'Submit';

    submitButton.style.marginLeft = '10px';
    submitButton.style.height = '20px';
    submitButton.style.width = '70px';

    document.body.appendChild(submitButton);

})();
