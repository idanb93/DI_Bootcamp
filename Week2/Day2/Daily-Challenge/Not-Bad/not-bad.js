let sentence = 'The movie is not that bad I like it';

let wordNot = sentence.indexOf('not');
let wordBad = sentence.indexOf('bad');

let sentenceAsAnArray = sentence.split(' ');

let wordNotArray = sentenceAsAnArray.indexOf('not');
let wordBadArray = sentenceAsAnArray.indexOf('bad');

let amountOfWordsToDelete = (wordBadArray-wordNotArray)+1;
let startingPositionToDelete = wordNotArray;

if (wordBad === -1 || wordNot === -1 || wordNot > wordBad) {
    console.log(sentence);
} else if(wordBad > wordNot) {
    sentenceAsAnArray.splice(startingPositionToDelete, amountOfWordsToDelete, 'good');
    sentence = sentenceAsAnArray.join(' ');
    console.log(sentence);
}