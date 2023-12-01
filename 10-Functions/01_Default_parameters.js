const bookings = []

  
function createBooking(flightNum, numPassanger = 1,price = 199 * numPassanger){     //Default values  -- ES6
    //Default values  -- ES5
    // numPassanger = numPassanger || 1; 
    // price = price || 199;

    const booking={
        flightNum,
        numPassanger,
        price
    }
    console.log(booking);
    bookings.push(booking)
}
createBooking('LH123')
createBooking('LH123', 2)
createBooking('LH123', 2, 800)
createBooking('LH123', undefined, 800)  //if we want to skip a parameter