console.log("events")
// search "mdn event reference"
// click
// 3 methods to add events
// 1. 
const btn = document.querySelector(".btn-headline")
// method
// function clickMe(){
//     console.log("you clicked me")
// }
// btn.addEventListener("click", clickMe)

// 2. 
// btn.addEventListener("click", function(){
//     console.log("you clicked me 2nd method")
// })

// 3.
btn.addEventListener("click", ()=>{
    console.log("you clicked me 3rd method")
})