// complilation
// code execution

// why complilation

// how Java Script Works

// what is global execution context?
// what is local execution context?
// closures

console.log(this)
// console.log(window)
console.log(firstName)
var firstName = "salman" // firstname is undefined, not throws error
console.log(firstName)
// var firstName = ."salman" // code will throws error at the start of the execution, not at the last, mean 1st line will also not run

// 1. Determine appropirate scope of  
// var firstName => is not in any function, => JS will know it in global scope from the beginning of the execution. at line "15" it creates and assign value to it

// 2. Code execution phase:
// in java scriot code executes inside execution context
// And 1st execution context that is created => is called => Global execution context

// how global execution context works?
// global execution context
//  i. creaton phase
//  ii. code execution phase

// creation phase: -
//  window: {}
// this: => browser => window
// firstName: global scope

// java script itself is => synchronous programming language
// symchronous => when the code is running, whenever the first line is not completed, the other line will not execute
// single threaded =>faster =>

