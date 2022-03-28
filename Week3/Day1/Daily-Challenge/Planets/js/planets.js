let planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

for (let planet of planets) {

    let newDiv = document.createElement('div');
    newDiv.className = `planet ${planet}`;
    newDiv.style.top = (100 * Math.random()) + "%";
    newDiv.style.left = (100 * Math.random()) + "%";
    newDiv.style.background = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.firstElementChild.appendChild(newDiv);

    // switch (planet) {

    //     case 'Earth':
    //         for (let i = 0; i < 1; i++) {
    //             let moon = document.createElement('div');
    //             newDiv.className = `moon`;
    //             document.body.firstElementChild.appendChild(newDiv);
    //         }

    //     case 'Mars':
    //         for (let i = 0; i < 2; i++) {
    //             let newDiv = document.createElement('div');
    //             newDiv.className = `moon`;
    //             document.body.firstElementChild.appendChild(newDiv);
    //         }

    //     case 'Jupiter':
    //         for (let i = 0; i < 54; i++) {
    //             let newDiv = document.createElement('div');
    //             newDiv.className = `moon`;
    //             document.body.firstElementChild.appendChild(newDiv);
    //         }

    //     case 'Saturn':
    //         for (let i = 0; i < 54; i++) {
    //             let newDiv = document.createElement('div');
    //             newDiv.className = `moon`;
    //             document.body.firstElementChild.appendChild(newDiv);
    //         }

    //     case 'Uranus':
    //         for (let i = 0; i < 27; i++) {
    //             let newDiv = document.createElement('div');
    //             newDiv.className = `moon`;
    //             document.body.firstElementChild.appendChild(newDiv);
    //         }

    //     case 'Neptune ':
    //         for (let i = 0; i < 14; i++) {
    //             let newDiv = document.createElement('div');
    //             newDiv.className = `moon`;
    //             document.body.firstElementChild.appendChild(newDiv);
    //         }
    // }
}