console.log("static vs live list")

// querySelector => gives static list => node list
// getElementsBySomething => gives live list =>  html collection

const listItems = document.querySelectorAll(".todo-list li") // it select 5 list items
console.log("listItems = ", listItems)

// we create new element, and see what happens
const sixthLi = document.createElement("li")
sixthLi.textContent = "item 6"
const ul = document.querySelector(".todo-list")
ul.append(sixthLi)
console.log("listItems = ", listItems) // it still selects 5 items, means it is static 