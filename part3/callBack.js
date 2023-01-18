// understandng callback functions

function myFunc1 (callback){
    console.log("function is doing task 1")
    callback()
}
function myFunc2 (){
    console.log("function is doing task 2")
}

myFunc1(myFunc2) // doing task 1, doing task 2

myFunc1(()=>{
    console.log("funciton is doing task 3")
})


function getTwoNumbersAndAdd(number1, number2, callback) {
    console.log(number1,number2)
    if(typeof number1 === "number" && typeof number2 === "number"){
        callback(number1, number2)
    }else {
        console.log("wrong data type")
    }
}

function addTwoNumbers(num1, num2) {
    console.log(num1 + num2)
}

getTwoNumbersAndAdd(4,5, addTwoNumbers)