// Sets (it is iterable)
// store data 
// sets also have its own methods
// no-index based sellection
// order is not guarranted 
// unique items only (no duplicates allowed)
// differences between arrays anf sets => set doesn't allows duplicates, no index based access

// when to use sets? when we have unique values 

const numbers = new Set([1,2,3,2])
console.log("set of numbers = ",numbers)
const strset = new Set ("abc")
console.log("strset = ", strset)
const items = ['item1', 'item2', 'item3']
const empset = new Set()
empset.add(1)
empset.add(2)
empset.add(items)
empset.add(items)
empset.add(['item1', 'item2', 'item3']) 
console.log("empset = ", empset)
if(empset.has(1)){
    console.log("1 is present")
}else{
    console.log("1 is absent")
}

for(let empof of empset){
    console.log("empof = ", empof)
}