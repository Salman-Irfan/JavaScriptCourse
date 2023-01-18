console.log("promise.resolve()")
console.log("promise chaining")

const myPromise2 = Promise.resolve(5)
Promise.resolve(5).then(value => {
    console.log(value)
})

// .then() method => always return a function

// promise chaining

function myPromise3 (){
    return new Promise ((resolve, reject)=>{
        resolve("foo");
    })
}
myPromise3()
    .then((value)=>{
        console.log(value)
        value += "bar"
        return value
        // return Promise.resolve(value) => output will be same
    })
    .then((value)=>{ // we can only apply then() to promise, not on strings
        console.log(value)
    })