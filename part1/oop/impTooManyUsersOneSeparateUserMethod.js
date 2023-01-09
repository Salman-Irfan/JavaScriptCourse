const userMethods = {
    about: function(){
        return `${this.firstName} is ${this.age} years old`
    },
    is18: function(){
        return this.age >= 18;
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
    return user;
}
const user1 = createUser("salman", "irfan", "salman@email.com", 20, "address = abc@123")
const user2 = createUser("zeeshan", "irfan", "salman@email.com", 20, "address = abc@123")
const user3 = createUser("numan", "irfan", "salman@email.com", 20, "address = abc@123")

// problem with this approach, when ever user1, or user2, or user3 object is created. "about" and "is18" method will also created separately for each user. and all these methods will store in memory

// and in actual only one copy is enough

// so we create another object named "userMethods" and inside this method, we define our above mentioned methods.

console.log(user1)
console.log(user2.about())
console.log(user3.is18())