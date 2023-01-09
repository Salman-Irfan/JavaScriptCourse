// methods
// function inside object

// we dont kow the value of "this" when we write the code. 
// We know its value when the code is running
// this => object that is calling the function
const person = {
    firstName: "salman",
    age: 8,
    about: function(){
        console.log(`person name is ${this.firstName} and age is ${this.age}`)
    }
}
person.about()