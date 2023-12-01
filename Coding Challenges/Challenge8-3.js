// Your tasks:
// 1. Use a constructor function to implement an Electric Car (called 'EV') as a child
// "class" of 'Car'. Besides a make and current speed, the 'EV' also has the 
// current battery charge in % ('charge' property)
// 2. Implement a 'chargeBattery' method which takes an argument 
// 'chargeTo' and sets the battery charge to 'chargeTo'
// 3. Implement an 'accelerate' method that will increase the car's speed by 20, 
// and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 
// km/h, with a charge of 22%'
// 4. Create an electric car object and experiment with calling 'accelerate', 
// 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when 
// you 'accelerate'! Hint: Review the definiton of polymorphism 
// Test data:
// § Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%

const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function () {
    console.log(`${this.make} is going at ${this.speed + 10}`);
}

Car.prototype.brake = function () {
    console.log(`${this.make} is going at ${this.speed - 5}`);
}

const EV = function (make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
}

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
};

EV.prototype.accelerate = function (speed) {
    if (speed > 20) charge--;
    console.log(`${this.make} is going at ${this.speed}, with a charge of ${this.charge}`)
}

const tesla = new EV('Tesla', 120, 23)
tesla.chargeBattery(90);
console.log(tesla)
tesla.brake();
tesla.accelerate();