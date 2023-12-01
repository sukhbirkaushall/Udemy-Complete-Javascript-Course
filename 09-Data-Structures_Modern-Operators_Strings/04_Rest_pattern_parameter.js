//rest operator on left side
//destructuring
const [a, b, ...others] = [1, 2, 3, 4, 5]
console.log(a, b, others)  //1 2 [ 3, 4, 5 ]

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },
    orderDelivery: function ({ starterIndex = 1, mainIndex, time, address }) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
         will be delivered to ${address} at ${time}`)
    },
    orderPizza: function(mainIngredients, ...otherIngredients){
        console.log(mainIngredients)
        console.log(otherIngredients)
    }
}
const [pizza, , Risotto, ...otherFood] = [...restaurant.mainMenu, restaurant.starterMenu]
console.log(pizza, Risotto, otherFood) //Pizza Risotto [ [ 'Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad' ] ]

//objects
const {sat, ...weekdays} = restaurant.openingHours;
console.log(sat, weekdays)  //{ open: 0, close: 24 } { thu: { open: 12, close: 22 }, fri: { open: 11, close: 23 } }

//functions-
const add = function(...number){
    let sum =0;
    for(let i=0;i<number.length;i++)
        sum += number[i];
    console.log(sum)
}
add(2,3)     //5
add(2,4,5,6,7) //24
const x = [1,2,3]
add(...x)   //6

restaurant.orderPizza("mushroom", "onion", "spinach")  //mushroom [ 'onion', 'spinach' ]