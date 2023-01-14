console.log("add html elements")

// add new elementd to the page
// innerHtml to html element
// when you should usr it, when yoi shoulf not use it

const todoList = document.querySelector(".todo-list")
console.log("todoList = ", todoList)
console.log("todoList.innerHTML = ", todoList.innerHTML)

todoList.innerHTML += "<li>New Todo</li>"

// when you should usr it, when yoi shoulf not use it
// performance issues, everyb time browser re render its already existing elements => avoid using it

// when to use it? 
// when we have to change the inner HTML, not to add in existing html
