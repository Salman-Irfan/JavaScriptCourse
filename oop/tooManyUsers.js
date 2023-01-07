// const user1 = {
//     firstName: "salman",
//     lastName: "irfan",
//     email: "salmanirfan674@gmail.com",
//     age: 20,
//     address: "abc123",
//     about: function(){
//         return `${this.firstName} is ${this.age} years old`
//     },
//     is18: function(){
//         return this.age >= 18;
//     }
// }
// const aboutUser = user1.about()
// console.log(`aboutUser = ${aboutUser}`)

// function (that function create object)
// 2.) add key value pair
// 3.) return that object

function createUser (firstName, lastName, email, age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function(){
        return `${this.firstName} is ${this.age} years old`
    };
    user.is18 = function(){
        return this.age >= 18;
    }
    return user;
}
const user1 = createUser("salman", "irfan", "salman@email.com", 20, "address = abc@123")
const user2 = createUser("zeeshan", "irfan", "salman@email.com", 20, "address = abc@123")
const user3 = createUser("numan", "irfan", "salman@email.com", 20, "address = abc@123")

// problem with this approach, when ever user1, or user2, or user3 object is created. "about" and "is18" method will also created separately for each user.

console.log(user1)
const is18 = user1.is18();
console.log(is18)
const about = user1.about();
console.log(about)