function myFunc2(name){
    console.log("inside my func 2")
    console.log(`my name is ${name}`)
}
function myFunc(callback){
    // sql query
    const data = {//sql retreived
    }
    console.log("hello there I am a func and I can ...")
    callback("salman");
}
myFunc(myFunc2);