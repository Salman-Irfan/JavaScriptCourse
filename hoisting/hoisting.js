display();
function display() {
    console.log("inside display function")
    console.log("hello world")
    const addTwo = (num1,num2) => {
        return num1 + num2
    }
    console.log(addTwo(2,3))
    const mul = (num1, num2) => num1*num2
    console.log(mul(2,3))
}