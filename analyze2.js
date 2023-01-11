console.log(this)
// console.log(window)
console.log(myFunction)
myFunction()
console.log(myVarFunction)
myVarFunc()
console.log(fullName)

// function declaration
function myFunction(){
    console.log("this is my function")
}

// function expression
var myVarFunc = function(){
    console.log("this is my var function")
}

var firstName = "salman"
var lastName = "irfan"
var fullName = firstName + " " + lastName
console.log(fullName)

// During Execution
// in global execution context
// var firstName, lastName, fullName & function => myFunction; not created yet, but Java script knows them at the start, lexical scope.

// Global execution context is added in Stack, two parts => Global Memory, Code Execution Phase
