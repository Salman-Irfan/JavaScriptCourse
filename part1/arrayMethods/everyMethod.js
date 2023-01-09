const numbers = [1,4,6,8,10]
function isEven (number){
    return number % 2 === 0;
}
const ans = numbers.every(isEven);
console.log(ans)
// real problem
// tell all the products are less than 40,000 or not
const userCart = [
    {pid: 1, pname: "mobile", price: 12000},
    {pid: 2, pname: "laptop", price: 22000},
    {pid: 3, pname: "led", price: 32000},
]
const ansPrice = userCart.every((cartItem)=>cartItem.price < 40000)
console.log(ansPrice)