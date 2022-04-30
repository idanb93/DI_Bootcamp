let todoListItems = localStorage.getItem('todoListItems');
let todoListItemsAsArray = JSON.parse(todoListItems);

let currentTasksContainer = document.getElementById('current-tasks-container');

todoListItemsAsArray.forEach( (task)=>{

    let taskDescription = document.createElement('div');
    taskDescription.style.border = '1px solid black';

    let newp = document.createElement('p');
    newp.textContent = task['description'];
    taskDescription.appendChild(newp);
    taskDescription.setAttribute('hidden', true);

    let newAnchor = document.createElement('a');

    newAnchor.addEventListener('click', (event)=>{

        event.preventDefault();

        if (taskDescription.hidden){
            newTask.appendChild(taskDescription);
            taskDescription.hidden = false;
        } else {
            newTask.removeChild(newTask.lastChild);
            taskDescription.hidden = true;
        }

    });

    let newTask = document.createElement('div');
    newTask.style.border = '1px solid black';
    newTask.style.cursor = 'pointer';

    let name = document.createElement('p');
    name.textContent = task['name'];

    let startingTime = document.createElement('p');
    startingTime.textContent = task['startingTime'];

    let daysLeft = document.createElement('h2');
    let taskStartingTime = new Date(task['startingTime']);
    let taskStartingMonth = taskStartingTime.getMonth();
    let taskStartingDay = taskStartingTime.getDay();

    let taskEndingTime = new Date(task['endingTime']);
    let taskEndingMonth = taskEndingTime.getMonth();
    let taskEndingDay = taskEndingTime.getDay();

    let totalDays = ((taskEndingMonth - taskStartingMonth) * 30) + taskEndingDay - taskStartingDay;
    daysLeft.textContent = totalDays;
    daysLeft.style.color = 'red';

    newTask.appendChild(name);
    newTask.appendChild(startingTime);
    newTask.appendChild(daysLeft);

    newAnchor.appendChild(newTask);

    currentTasksContainer.appendChild(newAnchor);

})