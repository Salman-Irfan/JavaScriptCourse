function hello(){
    console.log("hello world")
}
hello()
hello.call()

// call, apply, bind

const user1 = {
    firstName: "salman",
    age: 20,
    about: function(hobby, color){
        console.log(this.firstName, this.age, hobby, color)
    }
}
const user2 = {
    firstName: "zeeshan",
    age: 21,
}
user1.about()
user1.about.call(user2, "read", "red")