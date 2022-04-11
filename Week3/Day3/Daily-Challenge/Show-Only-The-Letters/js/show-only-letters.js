
(function createPage() {

    let inputLabel = document.createElement('label');
    inputLabel.textContent = "Please enter some letters: ";
    document.body.appendChild(inputLabel);

    let input = document.createElement('input');
    document.body.appendChild(input);

    input.addEventListener('keyup', (event) => {

        // let inputCharisInt = parseInt(input.value[input.value.length - 1]);
        let ipnutCharIsLetter = input.value[input.value.length - 1].match(/[a-zA-Z]/i);

        if (ipnutCharIsLetter === null){
            let tempArr = input.value.split('');
            tempArr.splice(tempArr.length-1, 1);
            input.value = tempArr.join('');

        }

    });

    let submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.textContent = 'Submit';

    submitButton.style.marginLeft = '10px';
    submitButton.style.height = '20px';
    submitButton.style.width = '70px';

    document.body.appendChild(submitButton);

})();

// regex solution

// input.onkeyup = keyup;

// function keyup(){
//     this.value = this.value.replace(/^[a-zA-Z]+$/,'');
// }