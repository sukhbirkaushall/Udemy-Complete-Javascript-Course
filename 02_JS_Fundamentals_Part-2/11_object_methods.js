let obj = {
    firstName: "Sukhbir", // property : value
    lastName: "Singh",
    birthYear: 2000,
    job: "programmer",
    friends: ["A", "B", "C"],
    hasDriversLicense: false,

    // calcAge: function (birthYear) {
    //     return 2023 - birthYear
    // }

    // calcAge:function(){
    //     console.log(this)
    //     return 2023 - this.birthYear
    // }

    calcAge: function () {
        this.age = 2023 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} years old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers licence }`
    }
};
// console.log(obj.calcAge(2000));
// console.log(obj['calcAge'](2000));
console.log(obj.calcAge());

// challenge getSummary funcrion-
console.log(obj.getSummary())