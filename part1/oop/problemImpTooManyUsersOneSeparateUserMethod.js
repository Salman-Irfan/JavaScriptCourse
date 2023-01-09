const userMethods = {
    about: function(){
        return `${this.firstName} is ${this.age} years old`
    },
    is18: function(){
        return this.age >= 18;
    },
    sing: function(){
        return `hello song`
    }
}
function createUser (firstName, lastName, email, age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = userMethods.about;
    user.is18 = userMethods.is18;
    user.sing = userMethods.sing;
    return user;
}
const user1 = createUser("salman", "irfan", "salman@email.com", 20, "address = abc@123")
const user2 = createUser("zeeshan", "irfan", "salman@email.com", 20, "address = abc@123")
const user3 = createUser("numan", "irfan", "salman@email.com", 20, "address = abc@123")

// problem with this approach, now we want another method for user, we will go in "userMethods" object, and define a new method here..?

// and pass its reference in userName definition..

// but what if we have thousands of methods, and we forgot to add one of the method in user definition---

console.log(user1)
console.log(user2.about())
console.log(user3.is18())
console.log(user1.sing())