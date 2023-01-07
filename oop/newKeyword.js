function createUser (firstName, age) {
    this.firstName = firstName;
    this.age = age
}
const user1 = new createUser("salman", 20)
createUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old`
}
console.log(user1)
console.log(user1.about())

// new keyword does following automatically
// 1. create an empty object => this = {}
// 2. return this
// 3. link function with its ptotoype via __proto__ => Object.create(function.prototype)

