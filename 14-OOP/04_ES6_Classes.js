// class expression
// const PersonCl = class{}

// class decleration
class PersonCl {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    //methods will be added to their prototype property
    calcAge(){
        console.log(2023 - this.birthYear)
    }

    greet() {
        console.log(`Hey ${this.firstName}`);
      }
}

const jessica = new PersonCl('Jessica', 1996)
console.log(jessica)

jessica.calcAge();