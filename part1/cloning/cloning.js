// clone using spread operator
const obj1 = {
    key1: "value1",
    key2: "value2"
}

const obj2 = {...obj1}

obj1.key3 = "value3"

console.log("obj1 = ", obj1)
console.log("obj2 = ", obj2)

// clone using Object.assign

const obj3 = {
    key1: "value1",
    key2: "value2"
}

const obj4 = Object.assign({}, obj3)

obj3.key3 = "value3"

console.log("obj3 = ", obj3)
console.log("obj4 = ", obj4)
