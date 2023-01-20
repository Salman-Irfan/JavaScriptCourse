const URL = "https://jsonplaceholder.typicode.com/posts";
function sendRequest(method, url) {
    return  new Promise(function(resolve, reject){
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function(){
            if(xhr.status >= 200 && xhr.status < 300){
                resolve(xhr.response);
            }else{
                reject(new Error("Something went wrong"));
            }
        }
        xhr.onerror = function () {
            reject (new Error("Network error"));
        }
        xhr.send();
    })
}

// const send = sendRequest("GET", URL);
// console.log(send)

// OR

sendRequest("GET", URL)
    .then(response => { //.then also returns promise
        console.log(response); //json
        const data = JSON.parse(response);
        console.log(data);
        return data; // if we dont return data here, then undefined was returned by default 
    })
    .then(data => {
        console.log("data = ", data);
        console.log("data[3] = ", data[3]);
        console.log("data[3].id = ", data[3].id);
        const id = ("data[3].id = ", data[3].id);
        console.log("id = ", id);

        return id;
    })
    .then(id => {
        console.log(".then(id) = ", id);
        const url = `${URL}/${id}`;
        return sendRequest("GET", url);
    })
    .catch(error => {
        console.log(error);
    })