console.log("mul events 1")

// const firstButton = document.querySelector("#one")
// firstButton.addEventListener("click", function(){
//     console.log("you clicked button one")
// })

const allButtons = document.querySelectorAll("button")
console.log(allButtons)

for (let button of allButtons){
    button.addEventListener("click", function(){
        console.log(this.textContent)
    })
}