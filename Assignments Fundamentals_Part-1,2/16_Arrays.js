// 1. Create an array containing 4 population values of 4 countries of your choice. 
// You may use the values you have been using previously. Store this array into a 
// variable called 'populations'
// 2. Log to the console whether the array has 4 elements or not (true or false)
// 3. Create an array called 'percentages' containing the percentages of the 
// world population for these 4 population values. Use the function 
// 'percentageOfWorld1' that you created earlier to compute the 4 
// percentage values

const population = [100, 120, 130, 110];
console.log(population.length === 4);  //1 method
const length = population.length === 4 ? true : false //2 method
console.log(length)

const percentageOfWorld1 = [population[0], population[1], population[2], population[3]];
console.log(percentageOfWorld1);
