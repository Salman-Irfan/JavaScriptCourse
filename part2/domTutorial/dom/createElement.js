console.log("create element")

// document.createElement()
// append
// prepend
// remove

const newTodoItem = document.createElement("li")
newTodoItem.textContent = "create element "
const  selectTodoList = document.querySelector(".todo-list")
selectTodoList.append(newTodoItem) //it add at the end
// selectTodoList.prepend(newTodoItem) //it add at the beginning
console.log("newTodoItem = ", newTodoItem)

// remove()
const todo1 = document.querySelector(".todo-list li")
console.log("todo1 = ", todo1)
todo1.remove()

// before and after

const beforeTodoItem = document.createElement("li")
beforeTodoItem.textContent = "before <ul> and after </form> tag"
const todoListSelect = document.querySelector(".todo-list")
todoListSelect.before(beforeTodoItem)

const afterTodoItem = document.createElement("li")
afterTodoItem.textContent = "after <ul> and before </section> tag"
const todoListSelectAfter = document.querySelector(".todo-list")
todoListSelectAfter.after(afterTodoItem)