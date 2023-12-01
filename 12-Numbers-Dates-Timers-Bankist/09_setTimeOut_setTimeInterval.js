//SET TIMEOUT

// setTimeout(()=>console.log("Here is your pizza"), 3000);
// console.log('Waiting...')

// setTimeout((ing1, ing2)=>console.log(`Here is your pizza with ${ing1} and ${ing2}`), 3000, 'olives', 'spinach');

const ingredients=['olives', 'spinach'];
 const pizzaTimer= setTimeout((ing1, ing2)=>console.log(`Here is your pizza with ${ing1} and ${ing2}`), 3000, ...ingredients);

if(ingredients.includes('spinach')) clearTimeout(pizzaTimer)

// SET INTERVAL
setInterval(function(){
    const now = new Date();
    console.log(now)
}, 1000);