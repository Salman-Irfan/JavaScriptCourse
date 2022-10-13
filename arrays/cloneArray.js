// let arr1 = ["item1", "item2"]
// let arr2 = arr1
// console.log(arr1 == arr2) // -> true

// let arr1 = ["item1", "item2"]
// let arr2 = ["item1", "item2"]
// console.log(arr1 == arr2) // -> false

// let arr1 = ["item1", "item2"]
// let arr2 = arr1.slice(0)
// console.log(arr1 == arr2)

// let arr1 = ["item1", "item2"]
// let arr2 = [].concat(0)
// console.log(arr1 == arr2) // -> false

let arr1 = ["item1", "item2"]
let arr2 = [... arr1].concat(["item3", "item4"])
console.log(arr2)
console.log(arr1 == arr2) // -> false

