function personInfo(){
    console.log(`person name is ${this.firstName} and age is ${this.age}`)
}
const person1 = {
    firstName: "salman",
    age: 8,
    about: personInfo
}
const person2 = {
    firstName: "salman2",
    age: 10,
    about: personInfo
}
person1.about()
person2.about()