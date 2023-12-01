//Looping Backward
const array = [
    "Sukhbir",
    "Singh",
    2023 - 2000,
    "Programmer",
    ["A", "B", "C"],
];

for (let i = (array.length - 1); i >= 0; i--) {
    console.log(i, array[i])
}

// loops in loops

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`--Starting Exercise ${exercise}`);

    for (let rep = 1; rep <= 5; rep++) {
        console.log(`Exercise ${exercise} Lifting weight repetition ${rep}`)
    }
}