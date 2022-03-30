let listTasks = [];

let clearButton = document.getElementById('clear-button');
let listTasksDiv = document.getElementsByClassName('listTasks')[0];
let submitButton = document.getElementById('submit-button');
submitButton.onclick = addTask;

console.log(listTasksDiv);

function addTask(event){
    let userInput = document.getElementById('userInput').value;
    event.preventDefault();

    if (userInput !== ''){

        listTasks.push(userInput);
        let newDiv = document.createElement('div');
        newDiv.className = 'new-task';
        newDiv.textContent = userInput;
        newDiv.style.fontSize = '25px';
        document.getElementById('userInput').value = '';

        let newCheckbox = document.createElement('input');
        newCheckbox.setAttribute('type', 'checkbox');

        if (newCheckbox.checked == 'true'){
            console.log('hello');
            newDiv.textContent.style.color = 'red';
        }

        // newCheckbox.addEventListener('checked', function (){
        //     console.log('hello');
        //     newDiv.textContent.style.color = 'red';
        // })

        let newImage = document.createElement('img');
        newImage.setAttribute('src', '..\\img\\rectangle-xmark-solid.svg');
        newImage.style.cursor = 'pointer';

        newImage.addEventListener('click', function (){
            listTasksDiv.removeChild(newDiv);
        })

        clearButton.addEventListener('click', function(){
            console.log('hello');
            let allTasks = document.querySelectorAll('.new-task');
            for (let task of allTasks){
                listTasksDiv.removeChild(task);
            }
        })

        newImage.style.height = '15px';
        newImage.style.width = '15px';

        let newHr = document.createElement('hr');
        newHr.style.width = '320px';
        newHr.style.backgroundColor = 'blue';

        newDiv.appendChild(newCheckbox);
        newDiv.appendChild(newImage);
        newDiv.appendChild(newHr);
        listTasksDiv.appendChild(newDiv);
    } else {
        alert('You have enetered an empty string');
    }
}