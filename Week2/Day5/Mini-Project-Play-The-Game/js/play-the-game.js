function playTheGame() {

    let userAnswer = confirm('Do you want to play the game?');

    if (userAnswer === false) {
        alert('No problem, Goodbye');
        return;

    } else {

        let userNumber;
        do {
            userNumber = prompt('Please enter a numebr between 0 and 10');
            userNumber = parseInt(userNumber);
        }
        while (isNaN(userNumber) || userNumber < 0 || userNumber > 10 )

        let computerNumber = (Math.random() * 11);
        computerNumber = Math.round(computerNumber);
        test(userNumber, computerNumber);
    }
}

function test(userNumber, computerNumber) {

    let numberOfChances = 1;

    do {

        if (userNumber === computerNumber) {
            alert('WINNER');
            return;
        } else if (userNumber > computerNumber) {
            alert('Your number is bigger then the computer’s, guess again');
            numberOfChances++;
        } else if (userNumber < computerNumber) {
            alert('Your number is smaller then the computer’s, guess again');
            numberOfChances++;
        }
        prompt('Please enter a new numebr between 0 and 10');

    }
    while (numberOfChances <= 3)

    alert('out of chances');
    return;
}