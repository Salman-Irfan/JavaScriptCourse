function about(hobby, color){
    console.log(this.firstName, this.age, hobby, color)
}
const user1 = {
    firstName: "salman",
    age: 20,

}
const user2 = {
    firstName: "zeeshan",
    age: 21,
}
about()
// call()
about.call(user1, "write", "yellow")
about.call(user2, "read", "red")

// apply()
// apply and call are same, difference is we pass array in apply
about.apply(user1, ["write", "yellow"])