class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    fullName(){
        return `${this.firstName} ${this.lastName}`
    }
}
const person1 = new Person("salman", "irfan", 24)
console.log("person1 = ", person1)
console.log("person1.fullName() = ", person1.fullName())

// we call the methods => person1.fullName()
// but we don't call the properties
// e.g person1.firstName
// firstName is a property not a method

// but we want a method is used as we use properties i.e. we do not need to call it => person1.fullName

