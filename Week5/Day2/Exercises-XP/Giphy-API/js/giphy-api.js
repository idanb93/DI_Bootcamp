let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');

// xhr.responseType = 'json';

xhr.send();

xhr.onload = function(){
    if (xhr.status !== 200){
        console.log(xhr.status);
    } else {
        console.log('Finished!');
    }

    let responseAsObject = JSON.parse(xhr.response);
    console.log(responseAsObject);
};

let xhr = new XMLHttpRequest();

// retrieve 10 gifs about the “sun”. The starting position of the results should be 2.
xhr.open('GET', 'https://api.giphy.com/v1/gifs/search?q=sun&offset=2&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');

xhr.send();

xhr.onload = function(){
    if (xhr.status !== 200){
        console.log(xhr.status);
    } else {
        console.log('Finished!');
    }

    let responseAsObject = JSON.parse(xhr.response);
    console.log(responseAsObject);
};
