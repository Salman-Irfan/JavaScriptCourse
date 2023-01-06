const user = {
    firstName: "salman",
    lastName: "irfan",
    email: "salman@email.com",
    age: 20,
    address: "abc123",
    about: function(){
        return `${this.firstName} is ${this.age} years old`
    },
    is18: function(){
        return this.age >= 18;
    }
}
const aboutUser = user.about()
console.log(`aboutUser = ${aboutUser}`)