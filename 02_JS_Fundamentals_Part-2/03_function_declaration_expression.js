// function declaration

function calcAge1(birthYear) {
    return 2023 - birthYear
}
const age1 = calcAge1(2000);
console.log(age1)

// function expression
const calcAge2 = function (birthYear) {
    return 2023 - birthYear
}
const age2 = calcAge2(2000);
console.log(age2)