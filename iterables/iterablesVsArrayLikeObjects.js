// iterables
// jis pe ham for of loop lga saken
// example => string, array
let arrs = [1,2,3,4,5];
console.log(arrs.length)
for (let arr of arrs){
    console.log(arr)
}
// array like object
// jin k pas length property hoti hai
// or jin ko ham index se access kar skty hain
// example => string, object

let objs = {
    key1: "val1",
    key2: "val2",
}
// for (let obj of objs ){
    // console.log(obj)
// }
// obj get error