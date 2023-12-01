const friends = ["A", "B", "C"];
console.log(friends);

//another way
const y = new Array(1990, 2000, 2010)

console.log(friends[0]) // to call an element
console.log(friends.length) // lenth of an array
console.log(friends[friends.length - 1]) // last element
friends[2] = 'jay' //to change the element
console.log(friends)

//array can hold different types of values
const firstName = 'Sukhbir';
const sukhbir = [firstName, 23, friends, 'string']
console.log(sukhbir)

//exercise
const calcAge = function (birthYear) {
    return 2023 - birthYear
}
const years = [1990, 2000, 2010]
const age1 = calcAge(years[0])
const age2 = calcAge(years[1])
const age3 = calcAge(years[2])
console.log(age1, age2, age3)