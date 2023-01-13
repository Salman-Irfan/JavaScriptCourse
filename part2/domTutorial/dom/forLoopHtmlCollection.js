console.log("for Loop HTML collection")

// array like object => indexing, length property
let forNavItems = document.getElementsByTagName("a")
console.log("forNavItems = ", forNavItems )
console.log("forNavItems.length = ", forNavItems.length)

// we cant use for each loop in html collection
// simple for loop
// for of loop
// for each

// for (let i=0; i < ForNavItems.length; i++){
//     console.log(ForNavItems[i])
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "black"
//     navItem.style.fontWeight = "bold"
// }

// for (let forNavItem of forNavItems){
//     forNavItem.style.backgroundColor = "black"
//     forNavItem.style.fontWeight = "bold"
// }

forNavItems = Array.from(forNavItems);
console.log("Array.isArray(forNavItems) = ", Array.isArray(forNavItems))
forNavItems.forEach((forNavItem) => {
    forNavItem.style.backgroundColor = "black"
    forNavItem.style.fontWeight = "bold"
});