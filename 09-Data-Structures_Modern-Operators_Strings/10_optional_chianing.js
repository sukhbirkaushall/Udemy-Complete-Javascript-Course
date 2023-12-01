const restaurant= {
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
    }, starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    }
}

// if(restaurant.openingHours && restaurant.openingHours.mon.open){
//     console.log(restaurant.openingHours.mon.open)
// }

//with optional chaining
console.log(restaurant.openingHours.mon?.opn) //undefined

const days = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun']
for(const day of days){
    const open = restaurant.openingHours[day]?.open ?? 'closed'  // on sat it is 0, so we use nullish coalescing operator
    // console.log(`on ${day} opens at ${open}`)
}

//for methods
console.log(restaurant.order?.(0,1) ?? 'Method doesnot exits') // [ 'Focaccia', 'Pasta' ]
console.log(restaurant.orderRisotto?.(0,1) ?? 'Method doesnot exits') // Method doesnot exits

//arrays - to check if it's empty
const users = [{name:"Sukhbir", email:"sukhbit@email.com"}]
// const users = []
console.log(users[0]?.name ?? 'User array empty')  // Sukhbir