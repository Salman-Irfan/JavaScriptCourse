// key press event
console.log("key press event")

const keyBody = document.body
console.log(keyBody)

keyBody.addEventListener("keypress", (e)=> {
    console.log(e.key)
})

// mouse over event

const mouseMainButton = document.querySelector(".btn")
console.log(mouseMainButton)

mouseMainButton.addEventListener("mouseover", (e)=> {
    console.log("mouse over event occurred")
    console.log(e)
})
mouseMainButton.addEventListener("mouseleave", (e)=> {
    console.log("mouse leave event occurred")
    console.log(e)
})