console.log("clone nodes")
// to use append and prepend both at a time
// it is not used mostly
const ul = document.querySelector(".todo-list")
const li = document.createElement("li")
li.textContent = "append and prepend through clone nodes"
const li2 = li.cloneNode(true)
ul.append(li)
ul.prepend(li2)