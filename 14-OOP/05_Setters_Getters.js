const account = {
    owner: 'Jonas',
    movements: [200, 530, 120, 300],

    get latest() {
        return this.movements.slice(-1).pop()
    },
    set latest(mov) {
        this.movements.push(mov);
    }
};
//get
// console.log(account.latest)

//set
account.latest = 50;
// console.log(account.movements)

// --- in class
class PersonCl {
    constructor(fullName, birthYear) {
      this.fullName = fullName;
      this.birthYear = birthYear;
    }

    //methods will be added to their prototype property
    calcAge(){
        console.log(2023 - this.birthYear)
    }

    greet() {
        console.log(`Hey ${this.fullName}`);
      }
    
      get age() {
        return 2037 - this.birthYear;
      }

      set fullName(name) {
        if (name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name!`);
      }
      get fullName(){
        return this._fullName
      }
}
const jessica = new PersonCl('Jessica Davis', 1996)
console.log(jessica)
console.log(jessica.age)