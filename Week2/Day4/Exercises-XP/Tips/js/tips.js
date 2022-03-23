
function calculateTip(){
    let bill = Number(prompt('what is the amount of the bill (dollars) ?'));
    let tip = 0;

    if (bill < 50){
        tip = 0.2;
    } else if (bill > 50 && bill < 200){
        tip = 0.15;
    } else {
        tip = 0.1;
    }

    bill += (bill*tip);
    console.log(`you need to tip ${tip*100}% and the final bill is ${bill}$`);

}

calculateTip();

