// maps 
// map is an iterable

// store data in ordered fashion

// store key value pair (like object)
// dkuplicate keys are not allowed like objects

// difference between maps and objects

// objects can only have strig or Symbol => as keys

// in maps you can only use anything as key => like array, number, string

const person = new Map()
person.set('fname', 'salman')
person.set('age', 7)
person.set(1, 'one')
person.set([1,2,3], 'one two three')
person.set({1: 'one'}, 'object literals as key')
console.log("person = ", person)
console.log("person.get(1) = ", person.get(1))
console.log("person.keys() = ", person.keys())

for (let key of person.keys()){
    console.log("key of person = ", key, typeof key)
}

for (let [key, value] of person){
    console.log("key = ", key, "value = ", value)
}

// person2 map
console.log("\n person 2 map \n")

const person2 = new Map([['fname', 'salman'], ['age',7]])
console.log("person2 = ", person2)

// realistic example
console.log("\n realistic example \n")
const person3 = {
    id: 1,
    fname: "salman"
}
const person4 ={
    id: 2,
    fname: "salman2"
}
const extraInfo = new Map()
extraInfo.set(person3, {age: 8, gender: "male"})
extraInfo.set(person4, {age: 9, gender: "female"})

console.log("person3.id = ", person3.id)
console.log("extraInfo.get(person3).gender = ", extraInfo.get(person3).gender)
console.log("extraInfo.get(person4).age = ", extraInfo.get(person4).age)