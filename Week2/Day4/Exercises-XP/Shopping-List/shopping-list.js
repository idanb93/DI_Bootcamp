let stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

let prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

let shoppingList = [ 'banana', 'orange', 'apple'];

function myBill(){

    let bill = 0;

    for (let item of shoppingList){
        if (stock[item] > 0){
            stock[item]--;
            bill += prices[item];
        }
    }

    console.log(bill);
    console.log(stock);
}

myBill();