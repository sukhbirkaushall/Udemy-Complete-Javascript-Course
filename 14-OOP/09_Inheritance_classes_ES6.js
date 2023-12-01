class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    calcAge() {
        console.log(2023 - this.birthYear)
    }

    greet() {
        console.log(`Hey ${this.fullName}`);
    }

    static hey() {
        console.log('Hey there')
    }
}

class StudentCl extends PersonCl {
    constructor(fullName, birthYear, course) {
        super(fullName, birthYear)
        this.course = course;
    }
    introduce () {
        console.log(`My name is ${this.fullName} and I study ${this.course}`)
    }
}

const martha = new StudentCl('Martha', 2000, 'Computer Science')
console.log(martha)
martha.introduce()