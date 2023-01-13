console.log("get multiple elements")

// get multiple elements by using getElementsByClassName
// get multiple elements by using querySelectorAll

const navItems = document.getElementsByClassName("nav-item") // => HTML collection
console.log("navItems = ", navItems)
console.log("navItems[2] = ", navItems[2])
console.log("typeof navItems = ", typeof navItems)
console.log("Array.isArray(navItems) = ", Array.isArray(navItems)) // => false

// querySelectorAll
console.log("querySelectorAll")
const navItemsQuery = document.querySelectorAll(".nav-item")
console.log("navItemsQuery = ", navItemsQuery) // => Node list, array like object
console.log("navItemsQuery[2] = ", navItemsQuery[2])
console.log("typeof navItemsQuery = ", typeof navItemsQuery)
console.log("Array.isArray(navItemsQuery) = ", Array.isArray(navItemsQuery)) // => false
