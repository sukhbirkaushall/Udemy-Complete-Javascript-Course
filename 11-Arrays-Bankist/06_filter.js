const movements = [20, 450, -400, 3000, -650, -130, 70, 1300]
const depposits = movements.filter(function (mov) {
    return mov > 0;
})
console.log(depposits)

const withdrawals = movements.filter(mov => mov < 0)
console.log(withdrawals)