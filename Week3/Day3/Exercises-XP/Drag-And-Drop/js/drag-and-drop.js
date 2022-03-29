
const box = document.querySelector('#box');
const empties = document.querySelectorAll('#large-box');

// Fill Listeners

box.addEventListener('dragstart' ,dragStart);
box.addEventListener('dragend' ,dragEnd);

// Loop through empties and call drag events

for (const empty of empties){
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragoleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}

// Drag Functions

function dragStart(){
    this.className += ' hold';
    setTimeout( ()=> (this.className = 'invisible'), 0); 
}

function dragEnd(){
    this.className = 'box';
}

function dragOver(event){
    event.preventDefault();
}

function dragEnter(event){
    event.preventDefault();
    this.className += ' hovered';
}

function dragLeave(){
    this.className = 'empty';
}

function dragDrop(){
    this.className = 'empty';
    this.append(box);
}
