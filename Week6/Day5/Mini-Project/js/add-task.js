
(function startPage(){
    
    let todoListItems = localStorage.getItem('todoListItems');
    let todoListItemsAsArray = JSON.parse(todoListItems);
    
    let submitButton = document.getElementById('submit-button');
    
    submitButton.addEventListener('click', (event) => {
    
        event.preventDefault();
    
        let name = (document.getElementById('name')).value;
        let description = (document.getElementById('description')).value;
        let startingTime = (document.getElementById('starting-time')).value;
        let endingTime = (document.getElementById('ending-time')).value;
        
        let newTask = {
            name: name,
            description: description,
            startingTime: startingTime,
            endingTime: endingTime,
            isCompleted: false,
        };
    
        todoListItemsAsArray.push(newTask);
    
        localStorage.setItem('todoListItems', JSON.stringify(todoListItemsAsArray));
    })

})();