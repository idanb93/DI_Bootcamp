
let gifCategory = document.getElementsByName('gif-category')[0].value;
let api_key = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';

function find() {

    let newDiv = document.createElement('div');
    newDiv.className = 'gif-div'
    let newImage = document.createElement('img');
    newImage.className = 'gif-image'
    newDiv.appendChild(newImage);
    document.body.appendChild(newDiv);
    newImage.src = 'Spin-1s-200px.gif';


    fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}&tag=&${gifCategory}&rating=g`)
        .then(response => response.json())
        .then(data => {
            newImage.src = data.data.images.original.url;
        })
        .catch(e => console.log(e));
}

function deleteAll() {
    while (document.body.children.length > 1){
        document.body.removeChild(document.body.lastChild);
    }
}