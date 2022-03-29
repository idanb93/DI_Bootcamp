let libButton = document.getElementById('lib-button');
let inputValues = [];

// Get the value of each of the inputs in the HTML file when the button is clicked.

function getInputs() {
    let inputs = document.querySelectorAll('input');

    for (let input of inputs) {
        // Make sure the values are not empty
        if (input.value !== '') {
            inputValues.push(input.value);
        } else {
            alert('Please fill all the fields: ');
            return;
        }
    }

    // Write a story that uses each of the values.

    let newP = document.createElement('p');
    newP.textContent = `When I first traveled to india I brought ${inputValues[0]}, otherwise it was to hard to ${inputValues[1]}
When I went to the city center I met ${inputValues[2]} and he told me that he ${inputValues[3]} eventually he recommended me to go to ${inputValues[4]}`

    document.body.appendChild(newP);
}

libButton.onclick = getInputs;


