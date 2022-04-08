( function welcome(username){
    
    let newLi = document.createElement('li');
    newLi.className = 'nav-link';
    let newAnchor = document.createElement('a');
    newAnchor.className = 'nav-link';
    newAnchor.textContent = 'Welcome ' + username;
    newLi.appendChild(newAnchor);

    let ul = document.querySelector('.navbar-nav');
    ul.appendChild(newLi);
})('John12');