const arr = [2, 3, 4]
// const newArr = [7, 8, arr[0], arr[1], arr[2]]
// console.log(newArr)

//Spread Operator
const newArr = [0, 1, ...arr];
console.log(newArr)   // [ 0, 1, 2, 3, 4 ]

console.log(...newArr)   //0 1 2 3 4    individual value

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },
    orderPasta: function (ing1, ing2, ing3){
        console.log(`Your pasta with ${ing1}, ${ing2} and ${ing3}`)   //Your pasta with mushroom, paneer and cheese
    }
}
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu)   //[ 'Pizza', 'Pasta', 'Risotto', 'Gnocci' ]

//copy of an array
const mainMenuCopy = [...restaurant.mainMenu]
console.log(mainMenuCopy)   //[ 'Pizza', 'Pasta', 'Risotto' ]

//join arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]
console.log(menu)  //[ 'Focaccia','Bruschetta','Garlic Bread','Caprese Salad','Pizza','Pasta','Risotto']

//Iterables: arrays, strings, maps, sets. NOt objets
const str = "String";
const letters = [...str]
console.log(letters)  //[ 'S', 't', 'r', 'i', 'n', 'g' ]
console.log(...str)  //S t r i n g


//real example
const ingredients=["mushroom", "paneer","cheese"]
restaurant.orderPasta(...ingredients)  //Your pasta with mushroom, paneer and cheese

// objects
const newRestaurant ={foundedIn:2023, ...restaurant , founder:"Sukhbir"}
console.log(newRestaurant)

const restaurantCopy = {...restaurant};
restaurantCopy.name="Ristorante Roma";
console.log(restaurantCopy.name)  //Ristorante Roma
console.log(restaurant.name)   //Classico Italiano