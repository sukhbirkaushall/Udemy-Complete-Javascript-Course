const now = 2023;
const ageOne = now - 2000;
const ageTwo = now - 2001;

// this is the example of operator precedence
console.log(now - 2000 > now - 2001) // -ve operator first and then > will be solved.
// it executed left to right

// there are some operators which are executed right to left, e.g.
let x, y;
x = y = 25 - 10 - 5;
// x=y=10
// then first y=10 and then left with x=10  -- left to right
console.log(x, y)  // 10 10

// parenthesis have high precendence
const average = (ageOne + ageTwo) / 2;
console.log(average)