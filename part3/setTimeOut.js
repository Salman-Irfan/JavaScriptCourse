// // synchronous vs asynchronus programming

// // synchronous programming
// console.log("script starts")
// for (let i = 0; i<25000; i++){ // this code is blocking the rest of the programm; as it is time taking
//     console.log(i)
// }
// console.log("script end")

// // asynchronous programming
// // setTimeout
// // setTimeout => takes functions as an input

// console.log("script start")
// function hello(){
//     console.log("hello")
// }
// setTimeout(hello, 1000);  //output =? script 1. start, 2. script end, 3. hello
// console.log("script end")

// // with arrow function

// setTimeOut returns us => ID

console.log("script start")
const id = setTimeout(() => {
    console.log("insideSetTimeOut")    
}, 1000);
for (let i =0; i<100; i++){
    console.log(i)
}
clearTimeout(id)
console.log(`setTimeOut Id = ${id}`)
console.log("script end")



