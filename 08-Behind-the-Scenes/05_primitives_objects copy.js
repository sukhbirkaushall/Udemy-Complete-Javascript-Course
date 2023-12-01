let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
    name:"sukhbir",
    age:30
}
const friend = me;
friend.age=27;
console.log("friend", friend)  // friend { name: 'sukhbir', age: 27 }
console.log("me", me)  //me { name: 'sukhbir', age: 27 }. Age changed for me also