//  == and ===

const age = 18;
if (age === 18) console.log('You are an adult (strict)')  // === will work for age = 18 but not for age = '18'
if (age == 18) console.log("You are an adult (loose)")

const favNum = Number(prompt('your fav number')) // prompt gives a string
if (favNum === 23) console.log('23 is a cool number')
else if (favNum === 7) console.log('7 is a cool number')
else console.log('number is not 23 and 7')

// not equal != and !==
if (favNum !== 23) console.log('why not 23?')
