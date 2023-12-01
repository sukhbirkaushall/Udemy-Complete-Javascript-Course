let obj = {
    firstName: "Sukhbir", // property : value
    lastName: "Singh",
    age: 2023 - 2000,
    job: "programmer",
    friends: ["A", "B", "C"]
};

console.log(obj)
console.log(obj.firstName);      // dot notation - for object properties only
console.log(obj['firstName']);  //bracket notation- also for expressions

const newKey = "Name";
console.log(obj['first' + newKey]);

const interestedIn = prompt('What do you wants to know');
if (obj[interestedIn]) {
    console.log(obj[interestedIn])
} else {
    console.log('wrong request')
}

// add properties to object
obj.location = 'India';
obj['twitter'] = '@twitter';
console.log(obj)

// Sukhbir has 3 friends, and his best friend is called A
console.log(`${obj.firstName} has ${obj.friends.length} friends, and his best friend is called ${obj.friends[0]}`)