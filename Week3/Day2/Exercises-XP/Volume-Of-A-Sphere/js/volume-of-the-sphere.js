let form = document.getElementById('MyForm');

let inputs = document.getElementsByTagName('input');

let submitButton = document.getElementById('submit');
submitButton.addEventListener('click', (event)=>{

    event.preventDefault();
    console.log(parseInt(inputs[0].value));

    if (!isNaN(parseInt(inputs[0].value))){
        console.log('hello');
        let radiusCubed = Math.pow(Number(inputs[0].value), 3);
        let cubedMultiplied = (radiusCubed * (4/3));
        let paiCube = cubedMultiplied * 3.14;
        inputs[1].value = Math.floor(paiCube);
    } else {
        inputs[0].value = '';
        alert('Please enter a number: ');
    }
});

