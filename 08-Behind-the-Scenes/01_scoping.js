// 'use strict';
function calcAge(birthYear) {
    const age = 2037 - birthYear;

    function printAge() {
        const output = `${firstName} you are ${age}, born in ${birthYear}`;
        console.log(output);  //function scope

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millineal = true; // var is accessible outside the block functional scope. let and const are not.

            //creating new variable with same name as outer scope variable
            const firstName = 'Steven'
            
            const str = `${firstName}, you are millineal`;
            console.log(str)   //block scope

            function add(a, b) {
                return a + b;
            }
            //reassigning outer scope's variable
            // output = 'variable values can be changed inside children scope';
        }
        console.log(millineal)
        console.log(output)
        // console.log(add(2,3))   // not accessible with strict mode,  but accessible without scrict mode
    }
    printAge()
    return age;
}

const firstName = 'Jonas' // global score
calcAge(1991);
