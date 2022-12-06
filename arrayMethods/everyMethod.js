const numbers = [1,4,6,8,10]
function isEven (number){
    return number % 2 === 0;
}
const ans = numbers.every(isEven);
console.log(ans)