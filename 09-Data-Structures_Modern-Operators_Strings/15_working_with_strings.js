//PART- 1
const airline = 'Air India'
const plane = 'A320'
console.log(plane[0]) //A
console.log(plane[1]) //3
console.log('B737'[0]) //B

console.log(airline.length) //9-- Length of a string
console.log(airline.indexOf('i')) //1
console.log(airline.lastIndexOf('i')) //7
console.log(airline.slice(4)) //India
console.log(airline.slice(-4)) //ndia
console.log(airline.slice(4, 7)) //Ind
console.log(airline.slice(1, -2)) //ir Ind
console.log(airline.slice(0, airline.indexOf(" "))) //Air
console.log(airline.slice(airline.lastIndexOf(" "))) // India

function checkMiddleSeat(seat) {
    const s = seat.slice(-1)
    if (s === 'B' || s === 'E') {
        console.log('Middle Seat');
    }
    else console.log('you are lucky')
}
checkMiddleSeat('23E')
checkMiddleSeat('23B')
checkMiddleSeat('23C')

console.log(new String('ABCD')) //  [String: 'ABCD'] .  javascript doest this behind the scenes 

