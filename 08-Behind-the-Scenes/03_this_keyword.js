console.log(this);

const calcAge = function (birthYear) {
    console.log(this)
}
calcAge();

const calcAge1 = (birthYear) => {
    console.log(this)
}
calcAge1();

const sukhbir = {
    year: 2000,
    calcAge: function () {
        console.log(this)
    }
}
sukhbir.calcAge()

const jonas = {
    year: 1991,
}
jonas.calcAge = sukhbir.calcAge;  //method borrowing
jonas.calcAge(); // this keyword will point to jonas here