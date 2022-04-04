let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let ordinal = ["th", "st", "nd", "rd"];

color.forEach( (element, index, array) => {

    if (index === 0){
        process.stdout.write(`${index+1}${ordinal[1]} choice is ${element}.`);
    } else if (index === 1){
        process.stdout.write(`${index+1}${ordinal[2]} choice is ${element}.`);
    } else if (index === 2){
        process.stdout.write(`${index+1}${ordinal[3]} choice is ${element}.`);
    } else {
        process.stdout.write(`${index+1}${ordinal[0]} choice is ${element}.`);
    }
})


color.map( (element, index)=>{
    if (index === 0){
        color[index] = `${index+1}${ordinal[1]} choice is ${element}.`;
    } else if (index === 1){
        color[index] = `${index+1}${ordinal[1]} choice is ${element}.`;
    } else if (index === 2){
        color[index] = `${index+1}${ordinal[1]} choice is ${element}.`;
    } else {
        color[index] = `${index+1}${ordinal[1]} choice is ${element}.`;
    }
})

console.log(color);