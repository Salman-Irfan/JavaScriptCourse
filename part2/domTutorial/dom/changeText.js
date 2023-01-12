console.log("change text")

// change text
// textContent and innerText

const changeHeading = document.getElementById("main-heading")
console.log("changeHeading.textContent = ", changeHeading.textContent)
changeHeading.textContent = "Manage your tasks is changed through JS DOM manipulation technique"
console.log("changeHeading.textContent = ", changeHeading.textContent)

console.log("changeHeading.innerText = ", changeHeading.innerText)

// difference between textContent and innerText
// CSS property => Display: node
// textContent => include "none" text
// innerText => exclude "none" text

