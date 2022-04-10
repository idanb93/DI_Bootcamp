let submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', (event) => {

    let name = document.getElementById('name');
    let lastname = document.getElementById('lastname');

    let fullName = {
        name: `${name.value}`,
        lastname: `${lastname.value}`,
    };

    let fullNameAsAJSON = JSON.stringify(fullName);
});