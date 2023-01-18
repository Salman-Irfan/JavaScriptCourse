console.log("promises")

// promises
// are those value, that we don't know yet, but will know later

const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];

// produce promise
const friedRicePromise = new Promise ((resolve, reject)=>{
    if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")){
        resolve("Fried Rice")
    }else{
        reject("could not do it")
    }
})

// consume promise => then

friedRicePromise.then ((myFriedRice)=>{
    console.log("lets eat", myFriedRice)
}, (error)=>{console.log(error)})