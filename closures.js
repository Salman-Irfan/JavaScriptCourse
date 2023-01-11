function hello(x){
    const a = "aConstant"
    const b = "bConstant"
    return function(){
        console.log(a,b,x)
    }
}

const ans = hello("arg")
ans()