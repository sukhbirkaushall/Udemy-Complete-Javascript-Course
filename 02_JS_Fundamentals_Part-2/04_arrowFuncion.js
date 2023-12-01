const calcAge3 = birthYear => 2023 - birthYear;
console.log(calcAge3(2000));

const yearUntilRetirement = (birthYear, firstName) => {
    const age = 2023 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement}`
}
console.log(yearUntilRetirement(2000, "Sukhbir"))