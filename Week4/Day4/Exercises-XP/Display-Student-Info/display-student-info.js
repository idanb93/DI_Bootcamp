

function displayStudentInfo(studentObject){
    let {first : first_name, last : last_name} = studentObject;
    return `your fullname is ${first_name} ${last_name}`;

}

console.log(displayStudentInfo({first: 'Elie', last:'Schoppik'}));