const arr = ["horse", "dog", "cat", "mare"];
function islength3(string){
    return string.length === 3;
}
const ans = arr.find(islength3)
console.log(ans)

//o/p => dog => it'll return first string that has 3 characters
