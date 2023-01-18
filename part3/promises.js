console.log("promises")

// promises
// are those value, that we don't know yet, but will know later

const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];


// setTimeOut => call back queue
// promise => micro task queue => priority high => will execute earlier than setTimeOut
setTimeout(() => {
    console.log("hello from set time out")
}, 0);

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
}, 
// (error)=>{console.log(error)}
).catch(
    (error)=>{
        console.log(error)
    })

    for (let i=0; i<=100; i++){
        console.log(Math.random(), i)
    }
    console.log("promises work asynchronously")