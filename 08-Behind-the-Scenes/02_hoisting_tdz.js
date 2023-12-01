// with variables

// console.log(me)
// console.log(job)
// console.log(year)
var me = "Sukhbir";
let job = "programmer";
const year = 2000;

//with functions
console.log(addDec(2, 3))
// console.log(addExp(2,3))
// console.log(addArrow(2,3))

function addDec(a, b) {
    return a + b;
}

const addExp = function (a, b) {
    return a + b;
}

const addArrow = (a, b) => a + b;

//Example
if (!numProducts) deleteProduct;
var numProducts = 10;
function deleteProduct() {
    console.log("Deleted")
}

var x = 1;
let y = 2;
const z = 3;
console.log(x === window.x)
console.log(y === window.y)
console.log(z === window.z)