let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

let epicConcatanated = epic.reduce( (fullstring, element)=>{ return fullstring + ' ' + element });
console.log(typeof epicConcatanated);
console.log(epicConcatanated);