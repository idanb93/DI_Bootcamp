
function retrieveElementsFromDOM() {
    let elements = [];
    let name = document.getElementById('name');
    elements.push(name);
    let height = document.getElementById('height');
    elements.push(height);
    let gender = document.getElementById('gender');
    elements.push(gender);
    let birthYear = document.getElementById('birth-year');
    elements.push(birthYear);
    let homeWorld = document.getElementById('home-world');
    elements.push(homeWorld);
    return elements;
}

async function fetchCharacter(elements) {
    let findSomeoneButton = document.getElementById('button');
    try {
        findSomeoneButton.addEventListener('click', async function (event) {
            if (elements[0].textContent) {
                for (let element of elements) {
                    element.textContent = '';
                }
            }
            elements[0].innerHTML = '<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i> <p>Loading...</p>';
            let responseObject = await fetch(`https://www.swapi.tech/api/people/${Math.floor((Math.random() * 83) + 1)}`)
            let responseAsJSObject = await responseObject.json();
            displayInfo(elements, responseAsJSObject['result']['properties']);
        })
    } catch (error) {
        throw new Error('unable to fetch data');
    }
}

function displayInfo(elements, character) {

    let characterData = [
        character.name,
        `Height: ${character.height}`,
        `Gender: ${character.gender}`,
        `Birth Year: ${character.birth_year}`,
        `Home World: ${character.homeworld}`
    ];
    
    for (let i = 0; i < elements.length; i++) {
        elements[i].textContent = characterData[i];
    }
}

async function start() {

    try {
        let elements = retrieveElementsFromDOM();
        await fetchCharacter(elements);

    } catch (error) {
        console.log("IN THE CATCH", error.message);
    }
}

start();