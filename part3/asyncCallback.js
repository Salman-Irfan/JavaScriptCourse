// callback, callback hell, pyramid of doom
// asynchronous programming

// we change heading 1 after 1 sec
// we change heading 2 after 2 sec (mean after 1 sec from change in heading1)... and so on

const heading1 = document.querySelector(".heading1")
const heading2 = document.querySelector(".heading2")
const heading3 = document.querySelector(".heading3")
const heading4 = document.querySelector(".heading4")
const heading5 = document.querySelector(".heading5")
const heading6 = document.querySelector(".heading6")
const heading7 = document.querySelector(".heading7")


// callback hell / nested callbacks
setTimeout(()=>{
    heading1.textContent = "Heading 1";
    heading1.style.color = "violet";
    setTimeout(() => {
        heading2.textContent = "Heading 2";
        heading2.style.color = "purple";
        setTimeout(() => {
            heading3.textContent = "Heading 3";
            heading3.style.color = "red";
            setTimeout(() => {
                heading4.textContent = "Heading 4";
                heading4.style.color = "orange";
                setTimeout(() => {
                    heading5.textContent = "Heading 5";
                    heading5.style.color = "yellow";
                    setTimeout(() => {
                        heading6.textContent = "Heading 6";
                        heading6.style.color = "brown";
                        setTimeout(() => {
                            heading7.textContent = "Heading 7";
                            heading7.style.color = "green";
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000)
// setTimeout(()=>{ // => not a better approach 
//     heading2.textContent = "Heading 2";
//     heading2.style.color = "purple"
// }, 2000)
