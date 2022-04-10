

function createLettersMapper(stringToMap) {

    let tempObject = {};

    for (let letter of stringToMap) {
        if (tempObject.hasOwnProperty(letter)) {
            tempObject[letter]++;
        } else {
            tempObject[letter] = 1;
        }
    }

    return tempObject;
}

function isAnagram(stringA, stringB) {

    if (stringA.length !== stringB.length) {
        return false;
    }

    let stringALettersMapper = createLettersMapper(stringA);
    let stringBLettersMapper = createLettersMapper(stringB);

    let stringALettersMapperKeys = Object.keys(stringALettersMapper);

    stringALettersMapperKeys.forEach((key) => {

        if (!stringBLettersMapper.hasOwnProperty(key) ||
            stringBLettersMapper[key] !== stringALettersMapper[key]) {
            return false;
        }
    })

    return true;

}

let str1 = "       Moon starer  ";
let str1Cleaned = str1.trim().replace(" ", "").toLowerCase();

let str2 = "                             Astronomer"
let str2Cleaned = str2.trim().replace(" ", "").toLowerCase();

console.log(isAnagram(str1Cleaned, str2Cleaned));