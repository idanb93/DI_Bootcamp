( function fortuneTeller(numOfChildren, partnersName, geographicLocation, jobTitle){
    let newDiv = document.createElement('div');
    let newP = document.createElement('p');
    newP.textContent = `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnersName} with ${numOfChildren} kids.`;
    newDiv.appendChild(newP);
    document.body.appendChild(newDiv);
})(4, 'Cameron', 'Sydney, Australia', 'CISO at a cyber company');