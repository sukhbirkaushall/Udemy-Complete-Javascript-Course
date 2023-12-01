console.log(3 || "ABCD") //3
console.log("" || "ABCD") //ABCD
console.log(true || 0) //true
console.log(undefined || null) // null
console.log(undefined || 0 || "" || "Hello" || 23)  //Hello

const restaurant = {}
const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
console.log(guest1);
const guest2 = restaurant.numGuest || 10;   // using or oprator
console.log(guest2)

// AND Operator
console.log(0 && "ABCD")  //0
console.log(7 && "ABCD")   //ABCD
console.log("hello"&& 23 && null &&'ABCD') //null because falsy value 

if(restaurant.orderPizza){
    restaurant.orderPizza('mushroom', 'spinach')
}
restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach') //using and operator