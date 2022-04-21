let menu = [
  {
    type: "starter",
    name: "Houmous with Pita"
  },
  {
    type: "starter",
    name: "Vegetable Soup with Houmous peas"
  },
  {
    type: "dessert",
    name: "Chocolate Cake"
  }
]

console.log(menu.some((element) => element['type'] === 'dessert' ? true : false));
console.log(menu.every((element) => element['type'] === 'starter' ? true : false));
if (!menu.some((element) => element['type'] === 'main-course' ? true : false)) {
  menu.push({ type: 'main-course', name: 'Pasta Bolognse' });
}

console.log(menu);

let vegetarian = ["vegetable", "houmous", "eggs", "vanilla", "potatoes"];

menu.forEach((meal) => {

  meal['vegetarian'] = false;

  for (let veggie_word of vegetarian) {
    if (((meal['name']).toLowerCase()).includes(veggie_word)) {
      meal['vegetarian'] = true;
    }
  }


})

console.log(menu);