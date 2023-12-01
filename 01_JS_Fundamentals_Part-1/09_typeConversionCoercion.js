//type conversion
const inputYear = "2000"; // 2000 is a string
console.log(inputYear + 18); // string + 18 = 200018
console.log(Number(inputYear)); // Number will change 2000 from string to number
console.log(Number(inputYear) + 18); // 2000 + 18 = 2018
console.log(Number('Sukhbir'));  //NaN
console.log(String(23)); // convert number to string

// type coercion
console.log("I am " + 23 + " years old") // javascipt converts 23 to string automatically. This is type coercion

console.log('23' - '10' - 3) // 10 because - sign will change 23 and 10 to numbers. * and / do the same

let n = '1' + 1; // "11"
n = n - 1; // "11" - 1 = 10
console.log(n)