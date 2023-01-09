//let and const are block scope -> 
//let and const cant be called outside their blocks
//var is a function scope
//var can ve called outside its defined blocks, but cant be called outside their functions

const var1 = () => {
    var a = 1
}

const var2 = () => {
    console.log(a)
}

var1()
// var2()