let client = "John";

let groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

let displayGroceries = ()=>{
    groceries['fruits'].forEach( (fruit)=>{
        console.log(fruit);
    })
}

let cloneGroceries = ()=>{

    let user = client; // user points to where client points = 'John'
    client = "Betty"; // user points to 'John' client points to a new memory location with 'Betty'

    let shopping = groceries; // shopping points to where groceries points = an object 
    groceries['totalPrice'] = '35$'; // shoping and groceries points to the same memory place so change will appear in both
    groceries['other']['payed'] = false; // shoping and groceries points to the same memory place so change will appear in both
}

cloneGroceries();