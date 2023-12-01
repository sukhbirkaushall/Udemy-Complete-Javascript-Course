const array = [
    "Sukhbir",
    "Singh",
    2023 - 2000,
    "Programmer",
    ["A", "B", "C"],
]

const types = [];

for (let i = 0; i < (array.length); i++) {
    console.log(array[i], typeof array[i]);
    // types[i] = typeof array[i]; // method 1
    types.push(typeof array[i]);  // method 2
}
console.log(types)


const years = [1990, 2007, 1969, 2020];
const ages = [];
for (let i = 0; i < years.length; i++) {
    // ages[i] = 2023 - years[i]
    ages.push(2023 - years[i])
}
console.log(ages)

//Continue and Break
for (let i = 0; i < (array.length); i++) {
    if (typeof array[i] !== 'string')
        continue;
    console.log(array[i], typeof array[i]);
}

for (let i = 0; i < (array.length); i++) {
    if (typeof array[i] === 'number')
        break;
    console.log(array[i], typeof array[i]);
}