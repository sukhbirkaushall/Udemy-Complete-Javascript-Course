const rest1 = {
    name: "Capri",
    // newGuest: 20
    newGuest: 0
}

const rest2 = {
    name: "la piazza",
    owner: "Giovanni"
}

//OR assignment operator
rest1.newGuest ||= 10     //rest1.newGuest= rest1.newGuest || 10
rest2.newGuest ||= 10    //rest2.newGuest= rest2.newGuest || 10

// if it's 0 we also have nullish coalescing assignment operator
rest1.newGuest ??= 10
rest2.newGuest ??= 10

// AND assignment operator
rest1.owner &&= '<ANONMYMOUS>'    // rest1.owner = rest1.owner && '<ANONMYMOUS>'
rest2.owner &&= '<ANONMYMOUS>'   // rest2.owner = rest2.owner && '<ANONMYMOUS>'

console.log(rest1)
console.log(rest2)