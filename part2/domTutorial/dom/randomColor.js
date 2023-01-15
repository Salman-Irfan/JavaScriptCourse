console.log("random color")

const mainButton = document.querySelector("button")
// console.log(mainButton)

const body = document.body
// console.log(body)

const currentColor = document.querySelector(".current-color")
// console.log(currentColor)

function randomColorGenerator(){
    const red = Math.floor(Math.random()*256)
    const green = Math.floor(Math.random()*256)
    const blue = Math.floor(Math.random()*256)
    const randomColor = `rgb(${red}, ${green}, ${blue} )`
    return randomColor
}

mainButton.addEventListener("click", (e)=>{
    // console.log("you clicked me")
    const randomColor = randomColorGenerator()
    console.log(randomColor)
    body.style.backgroundColor = randomColor
    currentColor.textContent = randomColor
})
// Math.random => this gives values between 0 to 1 randowmly
// Math.random * 10 => it gives values between 1 to 10

// to take integer values
// Math.floor(Math.random()*256)