// const arr1 = [1,2,3]
// const arr2 = [4,5,6]
// const newArray = [...arr1, ...arr2, "additional"]
// console.log(newArray)

//spread operator in objects
const obj1 = {
    key1: "value1",
    key2: "value2"
}
const obj2 = {
    key3: "value3",
    key4: "value4"
}
console.log(obj1)
console.log(obj2)

const obj3 = {
    ...obj1, 
    ...obj2, 
    key5: "value5"
}
console.log(obj3)