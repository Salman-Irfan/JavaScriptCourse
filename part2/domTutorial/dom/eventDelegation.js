console.log("event delegation")

const grandParentDelegation = document.querySelector(".grandParent")
console.log("grandParentDelegation = ", grandParentDelegation)
grandParentDelegation.addEventListener("click", (e)=>{
    console.log("you clicked on event delegation => grand parent")
    console.log(e) // focus on target => you will get element that you've clicked
    console.log(e.target) //you will get element that you've clicked
    console.log(e.target.textContent) //you will get element that you've clicked
    
})