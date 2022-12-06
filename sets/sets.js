//sets 
// it is iterable
// store data
// sets also have its methods
// no index based access
// unique items only (no duplicates are allowed)

const numbers = new Set([1,2,3,2]);
console.log(numbers)
if(numbers.has(1)){
    console.log("1 is present")
}
else{
    console.log("1 is not present")
}
for(let number of numbers){
    console.log(number)
}