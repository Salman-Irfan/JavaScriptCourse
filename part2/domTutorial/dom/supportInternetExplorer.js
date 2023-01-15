// some old methods to support Internet Explorer
// appendChild
// insertBefore
// replaceChild
// removeChild

const ul = document.querySelector(".todo-list")

// new element
const li = document.createElement("li")
li.textContent = "new todo"

const referenceNode = document.querySelector(".firstNode")
ul.removeChild(referenceNode)
