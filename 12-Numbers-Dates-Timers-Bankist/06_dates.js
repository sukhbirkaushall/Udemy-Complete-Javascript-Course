// creating dates

// const now = new Date();
// console.log(now)

// console.log(new Date('2023-10-31T11:02:29.387Z'))
// console.log(new Date(2037, 10, 10, 15, 23, 5))

// console.log(new Date(0))  // unix time
// console.log(new Date(3 * 24 * 60 * 60 * 1000))

//working with dates(date methods)
const future = new Date(2037, 10, 10, 15, 23)
console.log(future.getFullYear())
console.log(future.getMonth())
console.log(future.getDate())
console.log(future.getDay())
console.log(future.getHours())
console.log(future.getMinutes())
console.log(future.getSeconds())
console.log(future.toISOString())  //2037-11-10T09:53:00.000Z
console.log(future.getTime())  //2141459580000
console.log(new Date(2141459580000))  //2037-11-10T09:53:00.000Z

//right now timestamp
console.log(Date.now())

future.setFullYear('2040')
console.log(future)  // 2040-11-10T09:53:00.000Z