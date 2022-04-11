
(function submitForm() {

    let form = document.forms[0];

    form.addEventListener('submit', (event) => {

        event.preventDefault();

        const name = document.getElementById('name');
        const lastname = document.getElementById('lastname');

        let fullName = {
            name: `${name.value}`,
            lastname: `${lastname.value}`,
        };

        const fullNameAsAJSON = JSON.stringify(fullName, null, 3);
        console.log(fullNameAsAJSON);
    });
})();