// 1. Let's bring back the 'populations' array from a previous assignment
// 2. Use a for loop to compute an array called 'percentages2' containing the
// percentages of the world population for the 4 population values. Use the
// function 'percentageOfWorld1' that you created earlier
// 3. Confirm that 'percentages2' contains exactly the same values as the
// 'percentages' array that we created manually in the previous assignment,
// and reflect on how much better this solution is

const worldPopulation = 790; //population in millions
const population = [100, 120, 130, 110];
const percentages2 = [];

function percentageOfWorld1(population) {
    return (population / worldPopulation) * 100
}

for (let i = 0; i < population.length; i++) {
    percentages2.push(percentageOfWorld1(population[i]))
}
console.log(percentages2)