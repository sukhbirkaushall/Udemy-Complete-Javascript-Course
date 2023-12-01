const orderSet = new Set(['a', 'b', 'c', 'a', 'b']);
console.log(orderSet) // Set(3) { 'a', 'b', 'c' }
console.log(new Set('Sukhbir')) // Set(7) { 'S', 'u', 'k', 'h', 'b', 'i', 'r' }
console.log(orderSet.size); //3
console.log(orderSet.has('a')) //true
console.log(orderSet.add('d')) // Set(4) { 'a', 'b', 'c', 'd' }
orderSet.delete('c')
console.log(orderSet) // Set(3) { 'a', 'b', 'd' }
for (const order of orderSet) console.log(order) //  a b c

//example
const arr = ['a', 'b', 'c', 'a', 'd', 'b']
let arrSet = [...new Set(arr)];
console.log(arrSet)  // [ 'a', 'b', 'c', 'd' ] array of a set