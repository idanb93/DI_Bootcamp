let bankAmount = 1000000;
let vat = 1.7;
let details = [200, -100, 146, 167, -2900];

// Since map doesn't change the source array, we can say that it’s an immutable method.
// We will use map when we don't want to change our source array and we will use return to
// return the values in our new created array

// let detailsWithTaxes = details.map((element, index, array)=>{
//     return element *= vat;
// });

// console.log(detailsWithTaxes);

// we will use forEach when we will want to change our source array

details.forEach( (element, index)=>{
    details[index] *= vat;
});

details.forEach ((element)=>{
    bankAmount += element;
});

console.log(bankAmount);