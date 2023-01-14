console.log("class list")

const sectionTodo = document.querySelector(".section-todo")
console.log("sectionTodo = ", sectionTodo)
console.log("sectionTodo.classList = ", sectionTodo.classList)

// how to give classes with java script?
sectionTodo.classList.add("bg-dark")
console.log("sectionTodo.classList = ", sectionTodo.classList)

// how to remove class fr==throgh java script?
sectionTodo.classList.remove('bg-dark')
console.log("sectionTodo.classList = ", sectionTodo.classList)

// is class exists?
const isExist = sectionTodo.classList.contains('container')
console.log ("isExist = ", isExist) // => true
const notExist = sectionTodo.classList.contains('containers')
console.log ("notExist = ", notExist) // => true

// toggle
// if class rxists, thrn it rrmovrs, and if it not exists, then it adds it

sectionTodo.classList.toggle("bg-dark")
sectionTodo.classList.toggle("bg-dark")