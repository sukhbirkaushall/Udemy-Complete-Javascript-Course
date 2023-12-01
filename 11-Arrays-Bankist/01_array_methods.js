let arr = ['a', 'b', 'c', 'd', 'e'];
//slice
console.log(arr.slice(2))  //[ 'c', 'd', 'e' ]
console.log(arr.slice(2, 4))  //[ 'c', 'd']
console.log(arr.slice(-2))  //['d', 'e' ]

//splice
// console.log(arr.splice(2))  //[ 'c', 'd', 'e' ]
console.log(arr.splice(-1));  // [ 'e' ]
console.log(arr.splice(1, 2));  // [ 'b', 'c' ]
console.log(arr)    // [ 'a', 'b', 'c', 'd' ]  original array changed

//reverse
arr = ['a', 'b', 'c', 'd', 'e'];
let arr2 = ['a', 's', 'r', 'm']
console.log(arr2.reverse())  // [ 'm', 'r', 's', 'a' ]

//concat
let letters = arr.concat(arr2)
console.log(letters) //['a', 'b', 'c','d', 'e', 'm','r', 's', 'a']

//join
console.log(letters.join('-'))  // a-b-c-d-e-m-r-s-a
