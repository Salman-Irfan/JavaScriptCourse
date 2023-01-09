// iterables
// jis pe ham for of loop lga saken
// on which we can apply for of loop
// example => string, array
const fname = "salman"
for (let char of fname){
    console.log("char of fname = ", char)
}
let arrs = [1,2,3,4,5];
console.log("arrs.length = ", arrs.length)
for (let arr of arrs){
    console.log("arr of arrs = ", arr)
}
// array like object
// jin k pas length property hoti hai
// or jin ko ham index se access kar skty hain
// which have length property
// and that can be accessed by indexed
// example => string, object

let objs = {
    key1: "val1",
    key2: "val2",
}
// for (let obj of objs ){
    // console.log(obj)
// }
// obj get error

for (let obj in objs ){
    console.log("obj in objs", obj)
}
