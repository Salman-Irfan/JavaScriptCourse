function getTwoNumbersAndAdd(number1, number2, onSuccess, onFailure) {
    console.log(number1,number2)
    if(typeof number1 === "number" && typeof number2 === "number"){
        onSuccess(number1, number2)
    }else {
        onFailure()
    }
}

getTwoNumbersAndAdd(4,"15",(num1, num2)=>{
    console.log(num1 + num2)
}, ()=>{
    console.log("wrong data types")
    console.log("pass numbers only")
})