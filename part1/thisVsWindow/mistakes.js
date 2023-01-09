const user1 = {
    firstName: "salman",
    age: 20,
    about: function(){
        console.log(this) //output => window object is showing here, 
        console.log(this.firstName, this.age)
    }
}

// don't do this mistake

user1.about();
// now we restore its value in another function
const aboutFunc = user1.about; //we didn't call this about method here, we only stored its reference, and we get "this" value when we call our method
aboutFunc() //output => undefined undefined

const aboutFuncBind = user1.about.bind(user1); 
aboutFuncBind()