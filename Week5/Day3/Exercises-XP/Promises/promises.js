
// Create a promise that resolves itself in 4 seconds and returns a “success” string.

let promise = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve('success');
    }, 4000)
});

promise
    .then(result => console.log(result))

// How can you make your promise from part 1 shorter using Promise.resolve() and console.log “success”?
Promise.resolve().then(setTimeout( ()=>console.log('success'), 4000) );

// Add code to catch errors and console.log ‘Ooops something went wrong’.
Promise.resolve().then(setTimeout( ()=>console.log('success'), 4000) ).catch(console.log('oops something went wrong'));