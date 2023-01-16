console.log("event bubbling and capturing")

const grandParent = document.querySelector(".grandParent")
console.log(grandParent)
const parent = document.querySelector(".parent")
console.log(parent)
const child = document.querySelector(".child")
console.log(child)

// // capturing events
// child.addEventListener("click", (e)=>{ //when we click on child, its parent event statement will also printed
//     console.log("you clicked on child - capture")
// }, true) 

// parent.addEventListener("click", (e)=>{
//     console.log("you clicked on parent - capture")
// }, true)

// grandParent.addEventListener("click", (e)=>{
//     console.log("you clicked on grandParent - capture")
// }, true)

// document.body.addEventListener("click", (e)=>{
//     console.log("you clicked on body - capture")
// }, true)


// bubbling events 
child.addEventListener("click", (e)=>{ //when we click on child, its parent event statement will also printed
    console.log("you clicked on child")
}) 

parent.addEventListener("click", (e)=>{
    console.log("you clicked on parent")
})

grandParent.addEventListener("click", (e)=>{
    console.log("you clicked on grandParent")
})

document.body.addEventListener("click", (e)=>{
    console.log("you clicked on body - capture")
})

// capturing events
child.addEventListener("click", (e)=>{ //when we click on child, its parent event statement will also printed
    console.log("you clicked on child - capture")
}, true) 

parent.addEventListener("click", (e)=>{
    console.log("you clicked on parent - capture")
}, true)

grandParent.addEventListener("click", (e)=>{
    console.log("you clicked on grandParent - capture")
}, true)

document.body.addEventListener("click", (e)=>{
    console.log("you clicked on body - capture")
}, true)
