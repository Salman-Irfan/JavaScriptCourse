console.log("query selector")

// select element using query selector

// works with ID, class and other elements as well

// const logo = (document.getElementsByClassName("logo"))

const queryLogo = document.querySelector(".logo")
console.log(queryLogo)
console.dir(queryLogo)

const queryHeadline = document.getElementsByClassName("#main-heading")
console.log(queryHeadline)
console.dir(queryHeadline)

const navItem = document.querySelectorAll(".nav-item")
console.log(navItem)
console.dir(navItem)