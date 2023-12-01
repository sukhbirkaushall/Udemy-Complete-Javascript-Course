// Using Google, StackOverflow and MDN
'use strict';
// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temp) {
    let max = temp[0];
    let min = temp[0];

    for (let i = 0; i < temp.length; i++) {
        if (typeof temp[i] !== 'number') continue;
        if (temp[i] > max) {
            max = temp[i]
        }
        if (temp[i] < min) {
            min = temp[i]
        }

    }
    return max - min;
}
console.log(calcTempAmplitude(temperatures))

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

const calcTempAmplitudeNew = function (t1 , t2) {
  const temp = t1.concat(t2);
    let max = temp[0];
    let min = temp[0];

    for (let i = 0; i < temp.length; i++) {
        if (typeof temp[i] !== 'number') continue;
        if (temp[i] > max) {
            max = temp[i]
        }
        if (temp[i] < min) {
            min = temp[i]
        }

    }
    return max - min;
}
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);