console.log("function returning promise")


function ricePromise(){
    const returnPromiseBucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];

    return new Promise ((resolve, reject)=>{
        if(returnPromiseBucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")){
            resolve("Fried Rice")
        }else{
            reject("could not do it")
        }
    })
}

ricePromise().then ((myFriedRice)=>{
    console.log("lets eat", myFriedRice)
}, 
).catch(
    (error)=>{
        console.log(error)
    })
