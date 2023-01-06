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
about.call(user1, "write", "yello")
about.call(user2, "read", "red")