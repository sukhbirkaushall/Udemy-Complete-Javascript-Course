// split and join
console.log('a+very+nice+string'.split('+'))  //[ 'a', 'very', 'nice', 'string' ]
console.log('Sukhbir Singh'.split(' '))  // [ 'Sukhbir', 'Singh' ]
const[firstName, lastName]= 'Sukhbir Kaushal'.split(' ')
const newName = ['Mr.', firstName, lastName.toLowerCase()].join(' ')
console.log(newName)  // Mr. Sukhbir kaushal

function capitalizeName(name){
const names=name.split(' ');
const namesUpper=[];
for(const n of names){
    // namesUpper.push(n[0].toUpperCase() + n.slice(1)) //---1
    namesUpper.push(n.replace(n[0], n[0].toUpperCase())) // ---2
}
console.log(namesUpper.join(' '))  // Sukhbir Singh Kaushal
}
capitalizeName('sukhbir singh kaushal')

//padding
const message = 'Go to gate 23'
console.log(message.padStart(20,'+').padEnd(30,'+'))

function maskCard(number){
    const str = number + "";
    const last = str.slice(-4);
    return last.padStart(str.length, '*')
}
console.log(maskCard(394328979603496))

const message2='Bad Weather.. ';
console.log(message2.repeat(5))

const planeLine = function(n){
    console.log(`there are ${n} planes in a line ${'🛩'.repeat(n)}`)
}
console.log(planeLine(3))