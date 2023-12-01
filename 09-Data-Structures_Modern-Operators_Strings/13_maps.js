const rest = new Map();
rest.set('name', 'Classico');
rest.set(1, 'Italy')
console.log(rest.set(2, 'Portugal'))  //Map(3) { 'name' => 'Classico', 1 => 'Italy', 2 => 'Portugal' }
console.log(rest)

rest.set('Categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']).
    set('open', 11)
    .set('close', 23)
    .set(true, 'We are open')
    .set(false, 'we are close')
console.log(rest.get('name')) //Classico

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
console.log(rest.has('Categories')); // true
console.log(rest.size)  //8

// arrays and objects
const arr = [1, 2]
// rest.set([1,2], ' array')
rest.set(arr, ' array')
// console.log(rest.get([1, 2]))  we cannot retrive data from here because it is different in
console.log(rest.get(arr))
