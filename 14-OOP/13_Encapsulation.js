// Private class fields and methods
class Account {

    //Public fields (on instances)
    locale = navigator.language;

    //Private fields (on instances)
    #movements = [];
    #pin;
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin;

        console.log(`Thanks for opening an account ${owner}`)
    }
    // Public methods

    // PUblic interface
    getMovements() {
        return this.#movements;
    }

    deposit(val) {
        this.#movements.push(val)
    }
    withdraw(val) {
        this.deposit(-val)
    }

    requestLoan(val) {
        // if (this.#approveLoan(val)) {
        if (this._approveLoan(val)) {
            this.deposit(val);
            console.log('Loan Approved')
        }
    }
    static helper() {
        console.log('Helper');
    }

    //private methods
    _approveLoan(val) {
        // #approveLoan(val) {
        return true;
    }
}
const acc1 = new Account('Jonas', 'EUR', 1111);
// acc1.movements.push(250)
// acc1.movements.push(140)
// acc1.approveLoan(1000);
acc1.deposit(140)
acc1.withdraw(250)
acc1.requestLoan(1000);
console.log(acc1.getMovements)
console.log(acc1)
Account.helper();
 
// they will not work
// console.log(acc1.#movements)
// console.log(acc1.#pin)
// console.log(acc1.#approveLoan(1000))

