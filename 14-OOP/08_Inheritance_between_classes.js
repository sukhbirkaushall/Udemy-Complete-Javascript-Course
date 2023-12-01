// constructor function
const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear
}

Person.prototype.calcAge = function () {
    console.log(2023 - this.birthYear)
}

const Student = function (firstName, birthYear, course) {
Person.call(this, firstName, birthYear)
    this.course = course;
}

// Linking Prototypes
Student.prototype = Object.create(Person.prototype)

Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`)
}

const mike = new Student('Mike', 2000, 'Computer Science')
mike.introduce()
mike.calcAge()

console.log(miks.__proto__)
console.log(miks.__proto__.__proto__)
console.dir(Student.prototype.constructor)  // It was show Person so fix this
Student.prototype.constructor = Student