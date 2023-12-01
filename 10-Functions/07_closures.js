const secureBooking= function(){
    let passangerCount= 0;

    return function(){
        passangerCount ++;
        console.log(`${passangerCount} passangers`)
    }
}
const booker = secureBooking();
booker();
booker();
booker();
console.dir(booker)

//theory in copy