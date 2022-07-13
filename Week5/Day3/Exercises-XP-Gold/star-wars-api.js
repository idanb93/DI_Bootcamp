const urls = [
    'https://www.swapi.tech/api/people/1',
    'https://www.swapi.tech/api/people/2',
    'https://www.swapi.tech/api/people/gtr',
    'https://www.swapi.tech/api/people/4'
];

// const promisesArray = [];

// for (let url of urls) {

//     promisesArray.push(

//         new Promise( (resolve, reject) => {

//             // .catch cathes any Error that may happen between the chaining ( .then().then().then()  ) 
            
//             let randomSeconds = Math.random() * 15000;
//             console.log(randomSeconds + ' - ' + url);

//             setTimeout(()=>{
//                 try {
//                     fetch(url)
//                         .then(response => {
//                             if (response.status === 200) {
//                                 return response.json();
//                             } else if (response.status === 404) {
//                                 reject();
//                                 throw Error ('Character not found!');
//                             }
//                         })
//                         .then(data => {
//                             console.log(data?.result?.properties);
//                             resolve();
//                         })
//                         .catch(err => console.log(err));
    
//                 } catch (e) {
//                     console.log(e);
//                 }
//             }, randomSeconds)
//         })
//     );
// }

// // Will wait for all the promises in the array to be settled and will execute then
// Promise.all(promisesArray)
//     .then(result => console.log('All Promises were resolved successfully!'))
//     .catch(e => console.log('One or more Promises were rejected!'))




Promise.all(urls.map( async url => {
    const response = await fetch(url);
    return await response.json();
}) ).then(results=> { results.map((result)=>{
    if (result.message === 'ok'){
        console.log(result.result.properties);
    } else if (result.message = 'not found'){
        console.log(result.message);
    }
})
}).catch(err=>{
    console.log('One or more Promises was rejected');
})