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

sukhbir.calcAge()

console.log(sukhbir.__proto__)
console.log(sukhbir.__proto__ === Person.prototype)
console.log(Person.prototype.isPrototypeOf(sukhbir))

Person.prototype.species='Homo Sapiens'
console.log(sukhbir.species)

// to check property
console.log(sukhbir.hasOwnProperty('firstName'))
console.log(sukhbir.hasOwnProperty('species'))