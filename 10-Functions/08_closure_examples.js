// example 1
let f;
const g = function () {
    const a = 23;
    f = function () {
        console.log(a * 23)
    }
};

const h = function () {
    const b = 777;
    f = function () {
        console.log(b * 2)
    }
}

g();
f();

//reassigned f
h();
f();  // f changed for h because it is reassigned 

// example 2
const boardPassanger = function (n, wait) {
    const perGroup = n / 3;

    setTimeout(function(){
        console.log(`We are  now boarding all ${n} passangers`);
        console.log(`There are 3 groups, each with ${perGroup} passangers`)
    }, wait*1000)
    console.log(`boarding will start in ${wait} seconds`)
}
boardPassanger(180, 3);