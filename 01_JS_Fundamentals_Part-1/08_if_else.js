const age = 15;

if (age >= 18) {
    console.log('You can apply for a driving licence')
}
else {
    const yearsLeft = 18 - age;
    console.log(`You are left with ${yearsLeft} years to apply`)
}

const birthYear = 2000;
let century;     // century is declared outside
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century)