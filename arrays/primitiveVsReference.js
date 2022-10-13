//primitive typed
let num1=6
let num2=num1
console.log(`num1 = ${num1} & \nnum2 = ${num2}`)
num1++
console.log(`after num1++ => \nnum1 = ${num1} & \nnum2 = ${num2}`) // -> num1 =7 & num2 =6

//arrays are reference typed
let arr1=[6,7]
let arr2=arr1
console.log(`arr1 = ${arr1} & \narr2 = ${arr2}`)
arr1.push(3,4,5)
console.log(`after arr1++ => \narr1 = ${arr1} \n& \narr2 = ${arr2}`)


