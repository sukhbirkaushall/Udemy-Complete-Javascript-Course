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
    }
}
restaurant.orderDelivery({ starterIndex: 1, mainIndex: 0, time: '20:00', address: 'Himachal Pradesh' })

//destructuring
const { name, openingHours, categories } = restaurant
// console.log(name, openingHours, categories)

//to give names
const { name: restaurantName, openingHours: hours, categories: tags } = restaurant
// console.log(restaurantName, hours, tags)   

//default values
const { menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu, starter)

//mutating variables
let a = 111
let b = 999
const obj = { a: 23, b: 7, c: 14 }
// ({ a, b } = obj);
// console.log(a, b)

//nested objects
const { fri: { open: o, close: c } } = openingHours;
// console.log(o, c);

