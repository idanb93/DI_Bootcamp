
function makeAllCaps(words) {

    return new Promise((resolve, reject) => {
        words.forEach((word, index, array) => {

            if (typeof word !== 'string') {
                reject('there is an item in the array which is not a string!');
            }

            array[index] = word.toUpperCase();

        });

        resolve(words);

    })
}

function sortWords(words) {

    return new Promise((resolve, reject) => {

        if (words.length > 4) {
            resolve(words.sort());
        } else {
            reject('words array length is less than or equal to 4');
        }

    })
}

makeAllCaps([1, "pear", "banana"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result))
    .catch(error => console.log(error))


makeAllCaps(["apple", "pear", "banana"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result))
    .catch(error => console.log(error))

makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
    .catch(error => console.log(error))