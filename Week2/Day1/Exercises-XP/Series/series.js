let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

let myWatchedSeriesLength = 1;

let myWatchedSeriesSentence = "money heist";

console.log(`I watched ${myWatchedSeriesLength} series : ${myWatchedSeriesSentence}`);

myWatchedSeries[2] = 'friends'; // replace 'the big bang theory' with 'friends'
myWatchedSeries.push('squid game'); // add squid game to the end of the array
myWatchedSeries.unshift('how i met your mother'); // add 'how i met your mother' in the beginning of the array
myWatchedSeries.splice(1, 1); // remove 'black mirror' from the array
console.log(myWatchedSeries[1][2]); // print the third letter of 'money heist'

console.log(myWatchedSeries);








