
( async ()=>{
    try {
        const response = await fetch("https://www.swapi.tech/api/starships/9/");
        const result = await response.json();
        console.log(result.result);
    
    } catch (err) {
        console.log(err);
    }
})();