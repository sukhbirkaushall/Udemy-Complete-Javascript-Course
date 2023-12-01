///ternary operator
const age = 23;
// age >= 18 ? console.log('you can drink wine') : console.log('drink water')
const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

//template literal
console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`)