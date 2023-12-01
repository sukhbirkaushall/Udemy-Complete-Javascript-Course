'use strict';

//Destructuring
const arr = [1, 2, 3]
const [x, y, z] = arr;
console.log(x, y, z) //1 2 3

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    }
}

let [main, , secondary] = restaurant.categories;
console.log(main, secondary)  //Italian Vegetarian

//switch two variables
// let temp = main;
// main = secondary;
// secondary=temp
// console.log(main, secondary)  //Vegetarian Italian

// switch with destructuring
// [main, secondary] = [secondary, main]
// console.log(main, secondary)  //Vegetarian Italian  

//receive 2 values from a function
const [starter, mian] = restaurant.order(2, 0);
console.log(starter, main)   //Garlic Bread Italian

//nested array
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k)   //2 5 6

//default values
const [p = 1, q = 1, r = 1] = [8, 9]
console.log(p, q, r)   //8 9 1
