function compareToTen(num) {

    let promise = new Promise((resolve, reject) => {
        if (num < 10) {
            resolve('The number is lower than 10');
        } else if (num > 10) {
            reject('The number is bigger than 10');
        } else {
            resolve('The number is equal to 10');
        }
    });

    return promise;
}

compareToTen(10)
    .then(result => console.log(result))
    .catch(error => console.log(error));


compareToTen(8)
    .then(result => console.log(result))
    .catch(error => console.log(error))