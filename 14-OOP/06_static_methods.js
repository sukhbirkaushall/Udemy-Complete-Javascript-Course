// in constructor function
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
console.log(sukhbir) 

Person.hey= function(){
    console.log("Hey")
}

Person.hey()

// in classes
// instance methods
class PersonCl {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    calcAge(){
        console.log(2023 - this.birthYear)
    }

    greet() {
        console.log(`Hey ${this.firstName}`);
      }

      // static methods
      static hey(){
        console.log('Hey there')
      }
}
PersonCl.hey();
