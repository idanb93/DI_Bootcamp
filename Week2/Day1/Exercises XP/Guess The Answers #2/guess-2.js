console.log(typeof(15));
// Prediction: number
// Actual: number

console.log(typeof(5.5));
// Prediction: number
// Actual: number

console.log(typeof(NaN));
// Prediction: number
// Actual: number

console.log(typeof("hello"));
// Prediction: string
// Actual: string

console.log(typeof(true));
// Prediction: boolean
// Actual: boolean

console.log(typeof(1 != 2));
// Prediction: boolean
// Actual: boolean

console.log("hamburger" + "s");
// Prediction: string
// Actual: string

console.log("hamburgers" - "s");
// Prediction: JS interpreter does not know what is substructing from a string of chars
// Actual: NaN

console.log("1" + "3");
// Prediction: string
// Actual: string

console.log("1" - "3");
// Prediction: -2 - JS interpreter knows to convert strings with numbers to numbers throguh it's type coertion
// Actual: -2

console.log("johnny" + 5);
// Prediction: string
// Actual: string

console.log("johnny" - 5);
// Prediction: NaN
// Actual: NaN

console.log(99 * "hello");
// Prediction: NaN
// Actual: NaN

console.log(1 != 1);
// Prediction: false
// Actual: false

console.log(1 == "1");
// Prediction: true
// Actual: true

console.log(1 === "1");
// Prediction: false
// Actual: false