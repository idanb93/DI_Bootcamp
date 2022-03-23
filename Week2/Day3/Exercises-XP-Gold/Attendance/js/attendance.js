let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
  }

  let name = prompt('what is your name? ');

  let guestListKeys = Object.keys(guestList);

  if (name in guestListKeys){
    console.log(`Hi! I'm ${name}, and I'm from ${guestList[name]}.`);
  } else {
    console.log('Hi! I\'m a guest.');
  }

  if (guestListKeys.includes(name)){
    console.log(`Hi! I'm ${name}, and I'm from ${guestList[name]}.`);
  } else {
    console.log('Hi! I\'m a guest.');
  }