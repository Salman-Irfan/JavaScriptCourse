console.log("event object")

// whenever event listener is added on any element
// JS engine => executes line by line
// browser => JS engine + extra features
// browser => JS engine + Web APIs

// when browser gets user performed an event
// browser => 2
// 1. returns callback function => JS engine
// 2. event that is happened along with callback function, stores its information
// we get this information in the form of an object

console.log("scripts start")
const allButtons = document.querySelectorAll(".my-buttons button")
console.log("allButtons = ", allButtons)

// for (let button of allButtons){
//     button.addEventListener("click", (event)=>{
//         console.log(event.target) // target & currentTarget are important
//         console.log(event.currentTarget.textContent) // target & currentTarget are important
//     })
// }

// console.log("script end")

allButtons.forEach((button)=>{
    button.addEventListener("click", (e)=>{
        let num = 0
        for (let i=0; i<1000000000; i++){
            num += 1;
        }
        console.log(e.currentTarget.textContent)
    })
})
let outerVar = 0
for (let i=0; i<1000000000; i++){
    outerVar += 1
}
console.log("outerVar = ", outerVar)
console.log("script end")