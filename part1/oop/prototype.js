function hello() {
    console.log("hello world")
}
// const hello = () => {
//     console.log("hello world")
// }
hello()
// in JS, functions are also object at the same time.
console.log(hello.name) //output=> hello
// you can add your own properties
hello.myOwnProperty = "very unique value";
console.log(hello.myOwnProperty)
console.log(hello.prototype)
// name property => tells function name
// function provides more useful properties
// like call, apply, bind

// functions provides us free space/empty object => {}
// PROTOTYPE: that empty object is known as prototype
// only functions provide prototype property, also arrow functions don't have prototype property

if(hello.prototype){
    console.log("prototype is present")
}else{
    console.log("prototype is absent")
}

hello.prototype.key1 = "value1"
hello.prototype.key2 = "value2"
hello.prototype.sing = function(){
    return "hello sing function"
}
console.log(hello.prototype)
console.log(hello.prototype.sing())