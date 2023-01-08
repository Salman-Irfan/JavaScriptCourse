class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    setName(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
const person1 = new Person("salman", "irfan", 24)
console.log("person1 = ", person1)
console.log("person1.fullName = ", person1.fullName)
console.log("person1.firstName = ", person1.firstName)
console.log("person1.lastName = ", person1.lastName)

person1.setName("numan", "ahmad")
// OR
// person1.firstName = "numan"
// person1.lastName = "ahmad"
console.log("person1 = ", person1)
console.log("person1.fullName = ", person1.fullName)
console.log("person1.firstName = ", person1.firstName)
console.log("person1.lastName = ", person1.lastName)

// but we want when we write
// person1.fullName = "numan ahmad"
// then person1.firstName => numan
// then person1.lastName => ahmad

