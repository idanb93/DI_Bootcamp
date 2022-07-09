

let newDiv = document.createElement('div');
let newImage = document.createElement('img');
newDiv.appendChild(newImage);
document.body.appendChild(newDiv);
newImage.src = 'Spin-1s-200px.gif';


fetch('https://api.giphy.com/v1/gifs/random?api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&tag=&rating=g')
    .then(response => response.json())
    .then(data => {
        newImage.src = data.data.images.original.url;
    })
    .catch(e => console.log(e));
