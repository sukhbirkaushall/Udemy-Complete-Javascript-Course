//PART- 2
const airline = 'Air India'
console.log(airline.toUpperCase())  //AIR INDIA
console.log(airline.toLowerCase())  //air india

//Fix capitalization in name
const passenger = 'SuKHbiR';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect); //Sukhbir

//Comparing Email
const email = 'abc@gmail.com';
const loginEmail = ' Abc@gmail.Com \n';
const normalEmail = loginEmail.toLowerCase().trim();
console.log(normalEmail) //abc@gmail.com
console.log(email === normalEmail)  //true

//replace
const price = '288,97&'
const priceUS = price.replace('&', '$').replace(',', '.');
console.log(priceUS) //288.97$

const announcement = 'All pasangers come to boarding door 23, boarding door 23';
console.log(announcement.replace('door', 'gate')) // All pasangers come to boarding gate 23, boarding door 23
console.log(announcement.replaceAll('door', 'gate')) //All pasangers come to boarding gate 23, boarding gate 23
//using regular expressions
console.log(announcement.replace(/door/g, 'gate')) //All pasangers come to boarding gate 23, boarding gate 23

//Booleans
const plane ='Air A320neo';
console.log(plane.includes('A320'))
console.log(plane.includes('Abc'))
console.log(plane.startsWith('Air'))
console.log(plane.endsWith('neo'))

if(plane.startsWith('Air') && plane.endsWith('neo')){
    console.log('part of the new airbus family')
}

//exercise
const chechPackage = function(items){
const baggage= items.toLowerCase();
if(baggage.includes('knife') || baggage.includes('gun')){
console.log('you are not allowed on board')
} else console.log('Welcome to board')
}
chechPackage('I have a laptop, some Food and a pocket kKnife');
chechPackage('Socks and Camera');
chechPackage('Got some snacks and a gun for protection')
