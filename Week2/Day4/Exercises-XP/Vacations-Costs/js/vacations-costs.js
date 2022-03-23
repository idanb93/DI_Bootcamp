
function hotelCost(){

    let nights = 0;

    do {
        nights = prompt('How many nights would you like to stay?');
        nights = parseInt(nights);
    }
    while(isNaN(nights))

    return 140*nights;

}

//////////////////////////////////////////////////////////////////////

let destinationPrices = {
    london: 183,
    paris: 220,
    other: 300,
}

function planeRideCost() {

    let destination = '';

    do {
        destination = prompt('Please enter the destination: ');
        // destination = parseInt(destination);
    }
    while(!isNaN(destination))

    destination = destination.toLowerCase();
    destinationPricesKeys = Object.keys(destinationPrices);

    if (destinationPrices.hasOwnProperty( destination )){
        return destinationPrices[destination];
    } else {
        return destinationPrices['other'];
    }
}

//////////////////////////////////////////////////////////////////////

function rentalCarCost(){

    let rentDays = 0;
    let cost = 0;

    do {
        rentDays = prompt('For how many days you would like to rent the car?');
        rentDays = parseInt(rentDays);
    }
    while(isNaN(rentDays))

    cost = 40*rentDays;

    if (rentDays > 10){
        cost -= 0.05*cost;
    }

    return cost;
}

function totalVacationCost() {

    let accomdationCost = hotelCost();
    let flightTicketCost = planeRideCost();
    let carRental = rentalCarCost();

    let totalCost = accomdationCost + flightTicketCost + carRental;

    console.log(totalCost);

}

totalVacationCost();
