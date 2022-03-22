let userVerb = prompt('Please enter a verb: ');

if (userVerb.length >= 3 && userVerb.substring(userVerb.length-3, userVerb.length) !== 'ing'){
    userVerb += "ing";
    console.log(userVerb);
} else if (userVerb.length >= 3 && userVerb.substring(userVerb.length-3, userVerb.length) === 'ing') {
    userVerb += 'ly';
    console.log(userVerb);
} else if (userVerb.length < 3) {
    console.log(userVerb);
}