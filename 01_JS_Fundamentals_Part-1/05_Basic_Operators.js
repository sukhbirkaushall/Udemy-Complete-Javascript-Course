// Arithmetic Operators

//-ve operator
const now = 2023;
const ageOne = now - 2000;
const ageTwo = now - 2001;
console.log(ageOne, ageTwo);
// multiple, division, exponentiation
console.log(ageOne * 2, ageTwo / 2, 2 ** 3) //2^3
// +ve operator
const firstName = "Sukhbir";
const lastName = "Singh";
console.log(firstName + " " + lastName)

//Assignment operators

let x = 10 + 5; // = is operator
x += 10; // x = x+10;
x -= 10; // x = x-10;
x *= 4; // x = x*4;
x++ // x =x+1
x-- // x =x-1

// Comparison operators

console.log(ageOne > ageTwo); //others are > ,  <  , >= , <=
console.log(ageTwo > 18);  // true/false 
const isFullAge = ageTwo >= 18;
console.log(now - 2000 > now - 2001)
