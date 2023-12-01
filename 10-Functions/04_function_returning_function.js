// const greet = function (greeting) {
//     return function (name) {
//         console.log(`${greeting} ${name}`)
//     }
// }

const greet = greeting => name => console.log(`${greeting} ${name}`)  // Arrow function

const greetHey = greet('Hello')
greetHey('Sukhbir')
//OR
greet('Hey')('Sukhbir')