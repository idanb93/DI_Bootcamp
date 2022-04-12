
let form = document.forms[0];
console.log(form);

form.addEventListener('submit', (event)=>{

    event.preventDefault();

    let CategoryInput = document.getElementById('category-input');
    let tag = `tag=${CategoryInput.value}`;
    let url = `https://api.giphy.com/v1/gifs/random?${tag}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`;

    let xhr = new XMLHttpRequest();

    xhr.open('GET', url);

    xhr.send();

    xhr.onload = function(){
        if (xhr.status !== 200){
            console.log(xhr.status);
        } else {
            console.log('Finished!');
        }
    
        let responseAsObject = JSON.parse(xhr.response);
        console.log(responseAsObject);

        let newDiv = document.createElement('div');

        let newImage = document.createElement('img');
        newImage.src = responseAsObject['data']['images']['downsized_medium']['url'];

        let deleteAllButton = document.getElementById('delete-all-btn');

        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'DELETE';
        deleteButton.style.display = 'block';
        deleteButton.style.height = '20px';
        deleteButton.style.width = '80px';

        newDiv.appendChild(newImage);
        newDiv.appendChild(deleteButton);
        document.body.appendChild(newDiv);

        deleteButton.addEventListener('click', (event)=>{
            document.body.removeChild(newDiv);
        });

        deleteAllButton.addEventListener('click', (event)=>{
            console.log(document.body.childElementCount);

            while (document.body.childElementCount > 2){
                document.body.removeChild(document.body.lastChild);
            }
        })

        
    };
})