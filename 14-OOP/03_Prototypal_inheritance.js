// on built-in objects
const Person = function (firstName, birthYear) {
    //instance properties
    this.firstName = firstName;
    this.birthYear = birthYear
}
const sukhbir = new Person('Sukhbir', 2000)

console.log(Person.prototype)
Person.prototype.calcAge = function () {
    console.log(2023 - this.birthYear)
}

console.log(sukhbir.__proto__)  //prototype of sukhbir
console.log(sukhbir.__proto__.__proto__)  //prototype of sukhbir's prototype
console.log(sukhbir.__proto__.__proto__.__proto__)

console.dir(Person.prototype.constructor)

//prototypes of an array
const arr = [3, 6, 6, 5, 6, 9, 9]
console.log(arr.__proto__)
console.log(arr.__proto__.__proto__)

Array.prototype.unique = function () {
    return [...new Set(this)]
}
console.log(arr.unique())