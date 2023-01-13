console.log("get and set")

// get and set attributes

// we are going to select our first anchor tag => "Home"

const link = document.querySelector("a")
console.log("link = ", link)

// "li" is HTML element, its class name => "nav-items" is its attribute.
// so inside li, => "href" is also attribute
// Also "input" is => element, and "type", "name", "placeholder" "id" are its attributes

console.log('link.getAttribute("href") = ', link.getAttribute("href"))
console.log('link.getAttribute("href").slice(1) = ', link.getAttribute("href").slice(1))
link.setAttribute("href", "https://codprog.com")
console.log('link.getAttribute("href") = ', link.getAttribute("href"))

const inputElement = document.querySelector(".form-todo input")
console.log('inputElement.getAttribute("type") = ', inputElement.getAttribute("type"))