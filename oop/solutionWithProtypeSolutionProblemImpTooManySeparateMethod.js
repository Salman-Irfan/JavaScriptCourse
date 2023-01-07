// const userMethods = {
//     about: function(){
//         return `${this.firstName} is ${this.age} years old`
//     },
//     is18: function(){
//         return this.age >= 18;
//     },
//     sing: function(){
//         return `hello song`
//     }
// }
function createUser (firstName, lastName, email, age, address){
    const user = Object.create(createUser.prototype);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}
createUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old`
}
createUser.prototype.is18 = function(){
    return this.age >= 18;
}
createUser.prototype.sing = function(){
    return `hello song`
}
const user1 = createUser("salman", "irfan", "salman@email.com", 20, "address = abc@123")
const user2 = createUser("zeeshan", "irfan", "salman@email.com", 20, "address = abc@123")
const user3 = createUser("numan", "irfan", "salman@email.com", 20, "address = abc@123")

console.log(user1)
console.log(user2.about())
console.log(user3.is18())
console.log(user1.sing())