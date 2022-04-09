
const robots = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        image: 'https://robohash.org/1?200x200'
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        image: 'https://robohash.org/2?200x200'
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        image: 'https://robohash.org/3?200x200'
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        image: 'https://robohash.org/4?200x200'
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        image: 'https://robohash.org/5?200x200'
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        image: 'https://robohash.org/6?200x200'
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        image: 'https://robohash.org/7?200x200'
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        image: 'https://robohash.org/8?200x200'
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        image: 'https://robohash.org/9?200x200'
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        image: 'https://robohash.org/10?200x200'
    }
];

let gridWrapper = document.querySelector('.grid-wrapper');

function populateRobotsConatiner() {
    for (let robot of robots) {

        let robotContainer = document.createElement('div');
        robotContainer.className = 'robot';

        let newImage = document.createElement('img');
        newImage.className = 'robot-image';
        newImage.src = robot['image'];

        let darkCircle = document.createElement('div');
        darkCircle.className = 'dark-circle';
        darkCircle.appendChild(newImage);

        let newH2 = document.createElement('h2');
        newH2.textContent = robot['username'];
        robotContainer.appendChild(newH2);

        let newH3 = document.createElement('h3');
        newH3.textContent = robot['email'];
        robotContainer.appendChild(newH3);

        robotContainer.appendChild(darkCircle);
        gridWrapper.appendChild(robotContainer);
    }
}

populateRobotsConatiner();

let searchBarInput = document.getElementById('search-bar');
let allRobotDivs = document.querySelectorAll('.robot');

(function load() {
    searchBarInput.addEventListener('keyup', (event) => {

        allRobotDivs = document.querySelectorAll('.robot');

        for (let i = 0; i < allRobotDivs.length; i++) {

            let currentRobotNameSubstring = (allRobotDivs[i].firstChild.textContent.substring(0, (searchBarInput.value).length)).toLowerCase();

            if (currentRobotNameSubstring !== searchBarInput.value.toLowerCase()) {
                gridWrapper.removeChild(allRobotDivs[i]);
            }
        }

    });

})();


searchBarInput.addEventListener('keyup', (event) => {

    if (!searchBarInput.value) {
        for (let i = 0; i < gridWrapper.childElementCount; i++) {
            gridWrapper.removeChild(gridWrapper.firstElementChild);
        }
        populateRobotsConatiner();
    }
})