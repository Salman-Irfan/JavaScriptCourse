console.log("static vs live list 2")

const listItems2 = document.querySelector(".todo-list")
console.log("listItems2 = ", listItems2)
const getListItems2 = listItems2.getElementsByTagName("li")
console.log("getListItems2 = ", getListItems2)
const nextLi = document.createElement("li")
nextLi.textContent = "next item"
listItems2.append(nextLi)
console.log("listItems2 = ", listItems2)
console.log("getListItems2 = ", getListItems2)