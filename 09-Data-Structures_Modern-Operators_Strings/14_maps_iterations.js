const questions = new Map([
    ["Question", "Which is the best programming language"],
    [1, 'C'],
    [2, 'Java'],
    [3, 'Javascrit'],
    ['correct', 3],
    [true, 'correct answer'],
    [false, 'try again']
]);
// console.log(questions)

console.log(questions.get('Question'))
for (const [key, value]of questions){
    if(typeof key === 'number')
    console.log(`Answer ${key}: ${value}`)
}

const answer = 3;
console.log(questions.get(questions.get('correct') === answer))//correct answer
// basically questions.get('correct') === answer is a boolean value and will return true.
// then(questions.get(true) will return the value of true from the map

console.log([...questions])
// console.log(questions.entries()) Same as above
console.log([...questions.keys()])
console.log([...questions.values()])
