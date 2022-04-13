Promise.resolve(3).then(result=>console.log(result)).catch(result=>console.log(result));

Promise.reject('Boo').then(result=>console.log(result)).catch(result=>console.log(result));