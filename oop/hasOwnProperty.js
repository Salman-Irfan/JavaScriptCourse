function CreateUser (firstName, lastName, email, age, address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
}
CreateUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old`
}
CreateUser.prototype.is18 = function(){
    return this.age >= 18;
}
CreateUser.prototype.sing = function(){
    return `hello song`
}
const user1 = new CreateUser("salman", "irfan", "salman@email.Com", 20, "address = abc@123")
const user2 = new CreateUser("zeeshan", "irfan", "salman@emailCcom", 20, "address = abc@123")
const user3 = new CreateUser("numan", "irfan", "salman@email.cCm", 20, "address = abc@123")

for (let key in user1){
    console.log(`key = ${key}`)
}
for (let key in user1){
    if(user1.hasOwnProperty(key)){
        console.log("user1.hasOwnProperty = ", key)
    }
}