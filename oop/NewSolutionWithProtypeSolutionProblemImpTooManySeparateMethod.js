function createUser (firstName, lastName, email, age, address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
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
const user1 = new createUser("salman", "irfan", "salman@email.com", 20, "address = abc@123")
const user2 = new createUser("zeeshan", "irfan", "salman@email.com", 20, "address = abc@123")
const user3 = new createUser("numan", "irfan", "salman@email.com", 20, "address = abc@123")

console.log(user1)
console.log(user2.about())
console.log(user3.is18())
console.log(user1.sing())