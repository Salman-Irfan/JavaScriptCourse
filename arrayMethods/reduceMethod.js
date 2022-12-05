const numbers = [1,2,3,4,5,10]
const sum = numbers.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue;
});
console.log(sum);

// accumulator,     currentValue,   return
// 1                   2            3
// 3                   3            6
// 6                   4            10
// 10                  5            15
//  15                 10           25

const userCart = [
    {pid: 1, pname: "mobile", price: 12000},
    {pid: 2, pname: "laptop", price: 22000},
    {pid: 3, pname: "led", price: 32000},
]
const totalAmount = userCart.reduce((totalPrice, currentPid)=>{
    return totalPrice + currentPid.price;
    
}, 0)
console.log(totalAmount)