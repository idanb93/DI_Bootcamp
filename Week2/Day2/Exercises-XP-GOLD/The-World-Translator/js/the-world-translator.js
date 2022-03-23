let userLanguage = prompt('which language do you speak?').toLowerCase();

switch(userLanguage){

    case 'english':
        alert('Hello');
        break;
    case 'french':
        alert('Bonjour');
        break;
    case 'hebrew':
        alert('Shalom');
        break;
    default:
        alert('01110011 01101111 01110010 01110010 01111001');
}

