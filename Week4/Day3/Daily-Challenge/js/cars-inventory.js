
let inventory = [
    { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
    { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
    { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
    { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
    { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];

function getCarHonda(carInventory) {
    let firstHondaInTheCarInventory = carInventory.find( car => car.car_make === "Honda");
    let {car_make : brand,  car_model : model ,car_year : year} = firstHondaInTheCarInventory;
    return `This is a ${brand} ${model} from ${year}`;
}

console.log(getCarHonda(inventory));

function sortCarInventoryByYear(carInventory) {
    carInventory.sort( (carA, carB)=>{
        if (carB['car_year'] > carA['car_year']){
            return 1;
        } else if (carA['car_year'] > carB['car_year'] ){
            return -1;
        } else {
            return 0;
        }
    })
}