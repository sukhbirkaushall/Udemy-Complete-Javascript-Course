const movements = [20, 450, -400, 3000, -650, -130, 70, 1300]

//some method
const myDeposits = movements.some(mov => mov > 0);
console.log(myDeposits)

// every method
console.log(movements.every(mov => mov > 0))

//sepparate callbacks
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));