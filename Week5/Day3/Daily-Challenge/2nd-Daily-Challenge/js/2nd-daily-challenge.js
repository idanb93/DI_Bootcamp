let morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`

function toJs(){

    return new Promise((resolve, reject)=>{
        if (morse.length === 0){
            reject('error');
        } else {
            resolve(JSON.parse(morse))
        }
    })
}

function toMorse(morseJS){
    return new Promise((resolve, reject)=>{

        let userInput = prompt('Please enter a word or a sentence').toLowerCase();
        let userInputArrayAsMorse = [];

        userInput.split('').forEach( (letter)=>{
            if (!(morseJS.hasOwnProperty(letter))){
                reject(`there is no morse converstion for: ${letter}`);
            } else {
                userInputArrayAsMorse.push(morseJS[letter]);
            }
        })

        resolve(userInputArrayAsMorse);

    })
}

function joinWords(morseTranslation){
    let morseTranslationNew = morseTranslation.join("\n");
    console.log(morseTranslationNew);
}

toJs()
.then(morseMapperAsAnObject => toMorse(morseMapperAsAnObject))
.then(userInputArrayAsMorse => joinWords(userInputArrayAsMorse))
.catch(errorMessage => console.log(errorMessage));