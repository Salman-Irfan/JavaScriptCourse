console.log("for loop node selectors")

let nodeSelectors = document.querySelectorAll("h1")
console.log("nodeSelectors = ", nodeSelectors)

// simple for loop
// for of loop
// for each loop

for (let i = 0; i<nodeSelectors.length; i++){
    const nodeSelector = nodeSelectors[i];
    nodeSelector.style.backgroundColor = "green"
}

for (let nodeSelector of nodeSelectors){
    nodeSelector.style.color = "yellow"
}
