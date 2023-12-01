const flight = 'LH234';
const sukhbir = {
    name: 'Sukhbir',
    passport: 38329239
}
const checkIn =  function(flightNum, passanger){
    flightNum = 'LH999';
    passanger.name='Mr.' + passanger.name;

    if(passanger.passport === 38329239){
        console.log('CheckIn')
    } else
    console.log('wrong passanger')
}
checkIn(flight, sukhbir)
console.log(flight)  //LH234  -- not changed
console.log(sukhbir) //{ name: 'Mr.Sukhbir', passport: 38329239 }   --  changed

function newPassport(person){
    person.passport = Math.trunc(Math.random() * 100000000)
}
newPassport(sukhbir)  // { name: 'Mr.Sukhbir', passport: 38329239 }
checkIn(flight, sukhbir)  // wrong passanger