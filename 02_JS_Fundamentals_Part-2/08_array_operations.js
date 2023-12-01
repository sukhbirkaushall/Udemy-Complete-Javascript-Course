const friends = ['A', 'B', 'C'];
const newLength = friends.push('D')  // too add elements at the end od array
console.log(newLength);
console.log(friends)

friends.unshift('E')// add at the beginning
console.log(friends)

const popped = friends.pop(); // removes last element
console.log(friends)
console.log(popped)

friends.shift(); //removes first element
console.log(friends)

console.log(friends.indexOf('A')) // indexOf tells the position of element

console.log(friends.includes('A')); // returns true and false

if (friends.includes('A')) {
    console.log('You have a friend called A')
}