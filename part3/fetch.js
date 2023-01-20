// fetch
// automatically send "GET" request by default 
const URL = "https://jsonplaceholder.typicode.com/posts";
const whatIsThis = fetch(URL);
console.log(whatIsThis); // it'll return promise. means we can apply .then method on it

fetch(URL)
    .then(response => {
        if(response.ok){
            console.log(response)
            // console.log(response.json()); // this will also return => promise
            return response.json();
        }else{
            throw new Error ("something went wrong");
        }
    })
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.log("insode catch");
        console.log(error);
    })