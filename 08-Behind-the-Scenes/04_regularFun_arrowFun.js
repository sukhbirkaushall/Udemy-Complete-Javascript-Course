var firstName = "ABC";
const sukhbir = {
    firstName: "Sukhbir",
    year: 2000,
    calcAge: function () {
        console.log(this);
        console.log(2023 - this.year)

        //  const self = this;
        // const isMil = function () { 
        //     console.log(self.year);  //to use this here
        // }

        //instead use arrow function
       
        const isMil = ()=> { 
            console.log(self.year);  //to use this here
        }
        isMil()
    },
    greet: () => { console.log(`Hey ${this.firstName}`) }   //this will be window here
}
sukhbir.greet()