const PersonProto = {
    calcAge(){
        console.log(2023 - this.birthYear)
    },
    init(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}

const steven = Object.create(PersonProto);
console.log(steven);
steven.name= 'Steven';
steven.birthYear= 2000;
steven.calcAge();


const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979)
sarah.calcAge()