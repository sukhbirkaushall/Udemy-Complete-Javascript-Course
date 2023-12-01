// 5 Falsy values 0, " " , undefined,null, NaN

console.log(Boolan(0)); // Boolean changes to a boolean value.. false
console.log(Boolan("Sukhbir")); // true
console.log(Boolan({})); // true

// it is type coercion
const money = 0;
if (money) {
    console.log("Don't spend")
} else {
    console.log("Get a job")  // it will be executed because  condition will be changed to boolean and money =0 is falsy
}