// Retrieve the form and console.log it.

let forms = document.forms;
console.log(forms[0]);

// Retrieve the inputs by their id and console.log them.

let firstInputById = document.getElementById('fname');
let lastInputById = document.getElementById('lname');

console.log(firstInputById.value);
console.log(lastInputById.value);

// Retrieve the inputs by their name attribute and console.log them.

let firstInputByName = document.getElementsByName('fname');
let lastInputByName = document.getElementsByName('lname');

console.log(firstInputByName[0].value);
console.log(lastInputByName[0].value);

// When the user submits the form (ie. submit event listener)

let submitButton = document.getElementById('submit');
submitButton.addEventListener('click', (event) => {

    let inputArray = [];
    let allInputs = document.querySelectorAll('input');
    event.preventDefault();

    for (let input of allInputs) {
        // make sure that the inputs are not empty
        if (input.value !== '') {
            // get the values of the input tags
            inputArray.push(input.value);
        }
    }

    let usersAnswer = document.getElementsByClassName('usersAnswer');
    for (let i = 0; i < inputArray.length-1; i++) {

        console.log(inputArray[i]);
        // create an li per input value
        let newLi = document.createElement('li');
        newLi.textContent = inputArray[i];

        // then append the li to the <ul class="usersAnswer"></ul>, below the form.
        usersAnswer[0].appendChild(newLi);
    }
});
