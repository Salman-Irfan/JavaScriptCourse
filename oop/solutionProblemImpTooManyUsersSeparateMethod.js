const obj1 = {
    key1: "value1",
    key2: "value2"
}
const obj2 = {
    key3: "value"
}
const obj3 = {}
    obj3.key4 = "value4";
    // but there is another way to create empty object, and add values in them

const obj4 = Object.create(obj1);
obj4.key5 = "value5"

console.log("obj2.key1 = ", obj2.key1) // output => undefined, but we want if obj2 don't has key1, then it automatically goes toward obj1

console.log(`obj4.key5 = ${obj4.key5}`)
console.log(`obj4.key1 = ${obj4.key1}`)
console.log("obj4 = ", obj4) // output => __proto__: Object OR [[prototype]]: Object => __proto__ => it contains reference of any object
// The key/value that JavaScript not find in its object, JS find that key/value in its __proto__ or in its [[prototype]] 

// [[prototype]] & prototype both are different from each other

// prototype => associated with functions 

console.log("obj4.__proto__", obj4.__proto__) //output => key1: 'value1', key2: 'value2'

// ______________________________________________________________________________________
// solution of the problem

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
    const user = Object.create(userMethods);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}
const user1 = createUser("salman", "irfan", "salman@email.com", 20, "address = abc@123")
const user2 = createUser("zeeshan", "irfan", "salman@email.com", 20, "address = abc@123")
const user3 = createUser("numan", "irfan", "salman@email.com", 20, "address = abc@123")

console.log(user1)
console.log(user2.about())
console.log(user3.is18())
console.log(user1.sing())