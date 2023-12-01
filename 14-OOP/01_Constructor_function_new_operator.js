const Person = function (firstName, birthYear) {
    //instance properties
    this.firstName = firstName;
    this.birthYear = birthYear

    //donot do this
    // this.calcAge = function () {
    //     console.log(2023 - this.birthYear)
    // }
}
const sukhbir = new Person('Sukhbir', 2000)
console.log(sukhbir)  // Person { firstName: 'Sukhbir', birthYear: 2000 }

// now we can create as many objects we want
const sukhbir1 = new Person('Sukhbir1', 2001)
const sukhbir2 = new Person('Sukhbir2', 2002)

console.log(sukhbir instanceof Person)  // true  because sukhbir object is created from Person