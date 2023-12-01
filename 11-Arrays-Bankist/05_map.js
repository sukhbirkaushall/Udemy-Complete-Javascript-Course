const movements = [20, 450, -400, 3000, -650, -130, 70, 1300]
const eurToUsd = 1.1;
// const movementUSD= movements.map(function(mov){
//     return mov * eurToUsd;
// })
// console.log(movementUSD)

// const movementUSD = movements.map(mov => mov * eurToUsd)
// console.log(movementUSD)

const movementsdescrition = movements.map((movement, index) => 
    `Movement ${index + 1} you ${movement > 0 ? 'depposited' : 'withdraw'} ${Math.abs(movement)}`
)

console.log(movementsdescrition) 