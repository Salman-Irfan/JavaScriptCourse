// arrow function does not has its own "this".It takes "this" from its surrounding (means one level up). nd we can not change "this" f arrow function. For example by using "call()", "this" will not change. 
const user1 = {
    firstName: "salman",
    age: 20,

    // about: function(){
    //      console.log(this.firstName,this.age)
    // }
    
    about: () => { // short syntax
        console.log(this.firstName, this.age) //in this case "this" is one level up i.e. "window"
    }
}
user1.about() //undefined undefined
user1.about.call(user1) //undefined undefined