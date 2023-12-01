const movements = [20, 450, -400, 3000, -650, -130, 70, 1300]

// using for of loop
// for(const movement of movements){
// for (const [i, movement] of movements.entries()) {
//     if (movement > 0) {
//         console.log(`Movement ${i + 1} you deposited ${movement}`)
//     } else {
//         console.log(`Movement ${i + 1} you withdraw ${Math.abs(movement)}`)
//     }
// }

///Using for each
movements.forEach(function (movement, index, arr) {
    if (movement > 0) {
        console.log(`Movement ${index + 1} you deposited ${movement}`)
    } else {
        console.log(`Movement ${index + 1} you withdraw ${Math.abs(movement)}`)
    }
})