function makeJuice(size){

    let ingrediants = [];

    function addIngredients(first_ingredient, second_ingrediant, third_ingrediant){
        ingrediants.push(first_ingredient);
        ingrediants.push(second_ingrediant);
        ingrediants.push(third_ingrediant);
    }

    function displayJuice(){

        process.stdout.write(`The client wants a ${size} juice, containing `);
        ingrediants.forEach( (ingredient)=>{
            process.stdout.write(ingredient + ', ');
        })
    }

    addIngredients('Banana', 'Tamar', 'Milk');
    addIngredients('Chocolate', 'Vanilla-Protein', 'Almunds');

    displayJuice();
}

makeJuice('small');