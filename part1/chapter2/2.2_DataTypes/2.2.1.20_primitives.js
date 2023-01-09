// Write a piece of code that will create variables and initialize them with values of Boolean, nmbber, BigInt, String and undefined types using (whenever possible) literals and constructor functions.
let bool1 = true;
let nmb1 = 100;
let big1 = 100n;
let str1 = "this is a string";
let und1 = undefined;
// Print all values and all types of those values using console.log. Try to use string interpolation to display the value and type at the same time with a single console.log call, for example, in the following form: 1000 [number].
console.log(`typeof bool1 is ${typeof bool1}`)
console.log(`typeof nmb1 is ${typeof nmb1}`)
console.log(`typeof big1 is ${typeof big1}`)
console.log(`typeof str1 is ${typeof str1}`)
console.log(`typeof und1 is ${typeof und1}`)

// Carry out a chain of conversions: create a Boolean from a BigInt created from a nmbber that was created from a String. Start with the value "1234". Is it possible?
 let str2 = "1234"
 console.log(typeof str2)
 let nmb2 = +str2
 console.log(typeof nmb2)
 let big2 = BigInt(nmb2)
 console.log(typeof big2)
 let bool2 = Boolean(big2)
 console.log(typeof bool2)
//  let und2 = undefined(bool2)
//  console.log(typeof und2)

//  Try adding two values of the same type and check the result type. Try it for all primitive types.

let str3 = str1 + str2
console.log(`type of str3 = ${typeof str3}`)
let nmb3 = nmb1 + nmb2
console.log(`type of nmb3 = ${typeof nmb3}`)
let big3 = big1 + big2
console.log(`type of big3 = ${typeof big3}`)
let bool3 = bool1 + bool2
console.log(`type of bool3 = ${typeof bool3}`)

// Try adding two values of different types and check the results.
let mix1 = str3 + nmb3
console.log(mix1)
console.log(typeof mix1)

// Try to modify the line const str1 = 42 + "1"; to get the result 43 (without removing the quotes around 1)
const str4 = 42 + +"1";
//const values cant be modified
console.log(typeof str4)