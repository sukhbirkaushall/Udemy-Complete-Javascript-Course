const openingHours= {
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
};

const restaurant = { 
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    }
}

//property names/keys
const properties = Object.keys(openingHours);
console.log(properties)
let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `
}
console.log(openStr)

//property values
const values = Object.values(openingHours);
console.log(values)

//entries object
const entries = Object.entries(openingHours)
console.log(entries)

//x = [key, value] = [key, {open. close}]
for( const [key , {open, close}] of entries){
    console.log(` on ${key} we open at ${open} and close at ${close}`)
}