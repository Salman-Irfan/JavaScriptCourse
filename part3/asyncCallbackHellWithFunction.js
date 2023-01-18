// console.log("call back hell with function")

const heading1 = document.querySelector(".heading1")
const heading2 = document.querySelector(".heading2")
const heading3 = document.querySelector(".heading3")
const heading4 = document.querySelector(".heading4")
const heading5 = document.querySelector(".heading5")
const heading6 = document.querySelector(".heading6")
const heading7 = document.querySelector(".heading7")

function changeText (element, text, color, time, onSuccessCallback, onFailureCallBack){
    setTimeout(() => {
        if(element){
            element.textContent = text;
            element.style.color = color;
            if(onSuccessCallback){
                onSuccessCallback()
            }else{
                if(onFailureCallBack){
                    onFailureCallBack()
                }
            }
        }else{
            console.log("element does not exists")
        }
    }, time);
}

// pyramid of doom
changeText(heading1, "Heading 1", "violet", 1000, ()=>{
    changeText(heading2, "Heading 2", "purple", 1000, ()=>{
        changeText(heading3, "Heading 3", "red", 1000, ()=>{
            changeText(heading4, "Heading 4", "orange", 1000, ()=>{
                changeText(heading5, "Heading 5", "yellow", 1000, ()=>{
                    changeText(heading6, "Heading 6", "brown", 1000, ()=>{
                        changeText(heading7, "Heading 7", "green", 1000, ()=>{
                        }, ()=>{console.log("heading 7 does not exist")})
                    }, ()=>{console.log("heading 6 does not exist")})
                }, ()=>{console.log("heading 5 does not exist")})
            }, ()=>{console.log("heading 5 does not exist")})    
        }, ()=>{console.log("heading 2 does not exist")})
    }, ()=>{console.log("heading 1 does not exist")})
},()=>{console.log("heading 2 does not exist")})

// changeText(heading2, "Heading 2", "purple", 2000/4)
// changeText(heading3, "Heading 3", "red",    3000/4)
// changeText(heading4, "Heading 4", "orange", 4000/4)
// changeText(heading5, "Heading 5", "yellow", 5000/4)
// changeText(heading6, "Heading 6", "brown",  6000/4)
// changeText(heading7, "Heading 7", "green",  7000/4)