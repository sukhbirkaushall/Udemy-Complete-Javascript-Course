const firstName = "Sukhbir";
const job = "programmer";
const birthYear = 2000;
const year = 2023;

const string = "I'am " + firstName + ', a' + (year - birthYear) + " years old " + job
console.log(string);

//template literal
console.log(`I'm ${firstName} a ${year - birthYear} years old, ${job}`)

//multiple lines
console.log('string with \n\
multiple \n\
lines');
// template literal
console.log(`String with
multile 
lines`);