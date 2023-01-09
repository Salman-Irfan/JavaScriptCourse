const  obj1 = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
    key4: "value4",
}

//normal way
// const key1 = obj1.key1;
// const destKey2 = obj1.key2;
// console.log(key1, destKey2)

// object destructuring
const {key1, key2, ...restProps} = obj1;
console.log(key1);
console.log(key2);
console.log(restProps);
