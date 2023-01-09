const  numbers = [3,4,5,1,8];
const squareNumbers = numbers.map((number, index) => {
    return `index: ${index}, ${number * number}`;
});
console.log(squareNumbers);