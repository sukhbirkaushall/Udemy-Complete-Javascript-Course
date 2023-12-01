const owners = ['Jonas', 'Zach', 'Adam', 'Murtha']
console.log(owners.sort())

const movements = [20, 450, -400, 3000, -650, -130, 70, 1300]
// console.log(movements.sort())   //will check the first digit

//ascending
// movements.sort((a, b) => {
//     if (a > b) return 1;
//     if (b > a) return -1
// })

//or
movements.sort((a, b) => a - b)
console.log(movements)

//descending
// movements.sort((a, b) => {
//     if (a > b) return -1;
//     if (b > a) return 1;
// })
//or
movements.sort((a, b) => b - a)


console.log(movements)