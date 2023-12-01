const lufthansa = {
    airline: "Lufthansa",
    iatacode: "LM",
    booking: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iatacode} ${flightNum}`);
        this.booking.push({ flight: `${this.iatacode} ${flightNum}, name` })
    }
}
lufthansa.book(239, "Sukhbir")
// console.log(lufthansa)

const eurowings = {
    airline: "eurowings",
    iatacode: 'EW',
    booking: [],
}
const book = lufthansa.book;  // store the function in book
// call method
book.call(eurowings, 23, "ABCD")
console.log(eurowings)

//apply method
const flightdata = [583, "NAMEPASSANGER"]
book.apply(eurowings, flightdata)
// book.call(eurowings, ...flightdata)
console.log(eurowings)

//-------------------bind method------------------------

const bookEw = book.bind(eurowings)
const bookLm = book.bind(lufthansa)
bookEw(23, "Sukhbir")
const bookEw23 = book.bind(eurowings, 23)
bookEw23("Sukhbir")

//with event listener
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    console.log(this)
    this.planes++
    console.log(this.planes)
}

// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa))

//partial applications
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1,200))

const addVat = addTax.bind(null, 0.23)
console.log(addVat(100))

//above problem using function returning function
function addTax1(rate){
    return function(value){
        console.log(value + value * rate)
    }
}
addTax1(0.1)(100)