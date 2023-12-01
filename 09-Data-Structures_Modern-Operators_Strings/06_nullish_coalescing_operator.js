const restaurant = {}
restaurant.numGuest = 0;
const guest1 = restaurant.numGuest || 10;
console.log(guest1)  // it will be 10 i.e. 0 is a falsy value but here guests are 0 it cant be 10
const guest2 = restaurant.numGuest ?? 10;
console.log(guest2) //0
