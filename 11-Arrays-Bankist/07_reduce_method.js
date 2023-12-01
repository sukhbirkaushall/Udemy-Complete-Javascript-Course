const movements = [20, 450, -400, 3000, -650, -130, 70, 1300]
// const balance = movements.reduce(function(acc, cur, i ,arr){
//     console.log(`Iteration ${i} :${acc}`)
// return acc + cur
// }, 0);
// console.log(balance)

// arrow function
const balance = movements.reduce((acc, cur) =>  acc + cur , 0);
console.log(balance)

//for of loop
// let sum = 0;
// for(const mov of movements) sum +=mov;
// console.log(sum)

//Maximum value
const max = movements.reduce((acc, cur)=>{
    if(acc > cur){
        return acc;
    }
    else{
        return cur
    }
}, movements[0])
console.log(max)