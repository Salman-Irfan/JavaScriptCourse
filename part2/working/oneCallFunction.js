function func(){
    let counter = 0;
    return function(){
        if (counter == 0){
            console.log("function is called 1st time")
            counter++
        }else{
            console.log("function is already called 1st time")
        }
    }
}
const myFunc = func()
myFunc()
myFunc()
myFunc()