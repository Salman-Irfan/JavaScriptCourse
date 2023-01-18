// console.log("call back hell to promise")

const heading1 = document.querySelector(".heading1")
const heading2 = document.querySelector(".heading2")
const heading3 = document.querySelector(".heading3")
const heading4 = document.querySelector(".heading4")
const heading5 = document.querySelector(".heading5")
const heading6 = document.querySelector(".heading6")
const heading7 = document.querySelector(".heading7")
const heading8 = document.querySelector(".heading8")
const heading9 = document.querySelector(".heading9")
const heading10 = document.querySelector(".heading10")

function changeText (element, text, color, time){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if(element){
                element.textContent = text;
                element.style.color = color;
                resolve();
                }else{
                    reject("element not found");
                }
            }, time);
    })   
}

const returnedPromise =  changeText(heading1, "Heading 1", "violet", 1000/2)
const returnedPromise2 = returnedPromise.then(()=>{
    return changeText(heading2, "Heading 2", "purple", 1000/2)
})
returnedPromise2.then(()=>{
    return changeText(heading3, "Heading 3", "red", 1000/2)
})
    .then(()=>{
        return changeText(heading4, "Heading 4", "orange", 1000/2)
    })
    .then(()=>{
        return changeText(heading5, "Heading 5", "yellow", 1000/2)
    })
    .then(()=>{
        return changeText(heading6, "Heading 6", "brown", 1000/2)
    })
    .then(()=>changeText(heading7, "Heading 7", "blue", 1000/2))
    .then(()=>changeText(heading8, "Heading 8", "green", 1000/2))
    .then(()=>changeText(heading9, "Heading 9", "cyan", 1000/2))
    .then(()=>changeText(heading10, "Heading 10", "grey", 1000/2))
    .catch((error)=>{
        alert(error)
    })