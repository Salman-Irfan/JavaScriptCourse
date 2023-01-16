// console.log("set interval")

// console.log('script start')

// setInterval(() => { // setTimeout => runs one time, setInterval => runs every time
//     console.log(Math.random())
// }, 2000);

// console.log("script end")


/////////////////////////////////////////

const body = document.body;
console.log(body)


const button = document.querySelector("button")
console.log(button)
const intervalId =  setInterval(() => {
    const red = Math.floor(Math.random() * 126)
    const green = Math.floor(Math.random() * 126)
    const blue = Math.floor(Math.random() * 126)
    const rgb = `rgb(${red}, ${green}, ${blue})`
    body.style.background = rgb
}, 50);
console.log(intervalId)

button.addEventListener("click", ()=>{
    clearInterval(intervalId)
    button.textContent = body.style.background
})