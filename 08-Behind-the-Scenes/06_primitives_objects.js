//primitive types
let lastName = "William"
let oldlastName = lastName;
lastName = "Davis"
console.log(lastName);
console.log(oldlastName)

//reference types
const jessica = {
    firstName: "Jessica",
    lastName: "Williams",
    age: 27
}
const marriedJessica = jessica;
marriedJessica.lastName = "Davis"
console.log('before', jessica)
console.log('after', marriedJessica)

// copying object
const jessica1 = {
    firstName: "Jessica",
    lastName: "Williams",
    age: 27,
    family: ["alice", 'john']
}

const jessicaCopy = Object.assign({}, jessica1);
jessicaCopy.lastName = "Davis"
jessicaCopy.family.push('Mary')  // cant change the inner object in assign
//shalow clone not a deep clone
console.log('before', jessica1)
// before { firstName: 'Jessica',lastName: 'Williams',age: 27,family: [ 'alice', 'john', 'Mary' ]}
console.log('after', jessicaCopy) 
// after {firstName: 'Jessica',lastName: 'Davis',age: 27,family: [ 'alice', 'john', 'Mary' ]}