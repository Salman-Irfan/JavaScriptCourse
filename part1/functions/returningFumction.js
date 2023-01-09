function myFunc(){
    function hello(){
        console.log("hello inner function")
    }
    return hello;
}
const ans = myFunc()
ans()