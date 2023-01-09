// 2015 / es6 
// class keyword
// classes are fake
// backend => new keyword => proto - prototype

class CreateUser {
    constructor(firstName, lastName, email, age, address){
        console.log("constructor called")
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
    }
    about(){
        return `${this.firstName} is ${this.age} years old`
    }
    is18(){
        return this.age >= 18;
    }
    sing(){
        return `hello song`
    }
}

// function CreateUser (firstName, lastName, email, age, address){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.age = age;
//     this.address = address;
// }
// CreateUser.prototype.about = function(){
//     return `${this.firstName} is ${this.age} years old`
// }
// CreateUser.prototype.is18 = function(){
//     return this.age >= 18;
// }
// CreateUser.prototype.sing = function(){
//     return `hello song`
// }


const user1 = new CreateUser("salman", "irfan", "salman@email.Com", 20, "address = abc@123")
const user2 = new CreateUser("zeeshan", "irfan", "salman@emailCcom", 20, "address = abc@123")
const user3 = new CreateUser("numan", "irfan", "salman@email.cCm", 20, "address = abc@123")

console.log("user1 = ", user1)
console.log("user1.firstName = ", user1.firstName)
console.log("user2.about = ", user2.about())
console.log("user3.sing = ", user3.sing())
console.log("user1.is18 = ", user1.is18())

console.log(Object.getPrototypeOf(user1))