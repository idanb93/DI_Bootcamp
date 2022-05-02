function getUsers(event) {

    fetch('http://localhost:3000/')
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            let p = document.createElement('p');
            p.textContent = data;
            document.body.appendChild(p);
        })
        .catch(e => {
            console.log(e);
        })
}