console.log("inner HTML")

// inner html

// in index.html file
// all of the code inside header tag => is innerHTML
// all of the code inside div tag is also => innerHTML

// we are going to select headline class

const headline = document.querySelector(".headline")
console.log("headline = ", headline)
console.log("headline.innerHTML = ", headline.innerHTML)
headline.innerHTML = "<h1>Manage your tasks is changed through JS DOM manipulation technique => This line is changed through inner HTML</h1>"
console.log("headline.innerHTML = ", headline.innerHTML)
headline.innerHTML += " button also added <button class = \"btn btn-headline\">Learn More</button>"