console.log("async await");

const URL = "https://jsonplaceholder.typicode.com/posts";

async function getPosts () {  // the async function always returns a promise
    const response = await fetch(URL);  // returns promise, await will wait, until it is resolved
    console.log("response = ", response)

    const data = await response.json();
    console.log("data = ", data)
    return data;
}

const returned = getPosts();
console.log("returned = ", returned);