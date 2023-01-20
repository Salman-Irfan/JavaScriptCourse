const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();
console.log(xhr)

// step 1
console.log("xhr = ", xhr);
console.log("xhr.readyState = ", xhr.readyState);

xhr.open("GET", URL);

console.log("xhr = ", xhr);
console.log("xhr.readyState = ", xhr.readyState);

xhr.onreadystatechange = function() {
    console.log("xhr = ", xhr);
    console.log("xhr.readyState = ", xhr.readyState);

    if(xhr.readyState == 4){
        const response = xhr.response;
        console.log(response);
        console.log(typeof response); // string
        const data = JSON.parse(response);
        console.log(data);
        console.log(typeof data); // object
    }
}

xhr.onload = function(){
    console.log("onload function will only run if the xhr.readyState = 4")
    console.log(xhr.readyState)
}
xhr.send();

// error handling
const xhr2 = new XMLHttpRequest();
xhr.open("GET", URL);
xhr2.onload = ()=>{
    if(xhr2.status >=200 && xhr2.status <300){
        const data2 = JSON.parse(xhr2.response);
        console.log("data2 = ", data2);
        const id2 = data[3].id;
        console.log("id2 = ", id2);
        const xhr3 = new XMLHttpRequest();
        const URL3 = `${URL}/${id2}`;
        console.log("URL3 = ", URL3);
        xhr3.open("GET", URL3);
        xhr3.onload = () => {
            const data3 = JSON.parse(xhr3.response);
            console.log("data3 = ", data3);
        }
        xhr3.send();
    }
    else{
        console.log("something went wrong");
    }
}
xhr.onerror = () => {
    console.log("network error");
}
// 2nd approach


//////////////////////////////////////////

// basic theory

// AJAX: asynchronous java script and XML

// HTTP request

// is a set of "web development techniques"
// using many web technologies on the "client side"
// to create asynchronous web applications

// with Ajax, web aoolications can send and retrieve
// data from a server asynchronously (in the background)
// without interfering with the display and
// behavior of the existing page

// we don't use data in XML foemat anymore
// we use JSON now

// we have 3 most common ways to create ways to create and request yo server

// 1. xmlHttpRequest (old way of doing)
// 2. Fetch API (new way of doing)
// 3. axios (this is third party library)


// important 
// status
// readyState
// response

// Search => json TypIcode
// rest api stands for => representational state transfer


// Routes
// All HTTP methods are supported. You can use http or https for your requests.

// GET	/posts              => get / read soma data 
// GET	/posts/1           
// GET	/posts/1/comments               
// GET	/comments?postId=1              
// POST	/posts              => create some data
// PUT	/posts/1            => change / update in existing data    
// PATCH	/posts/1        => minor changing in existing data        
// DELETE	/posts/1        => delete some data        


// Resources
// JSONPlaceholder comes with a set of 6 common resources:

// /posts	100 posts
// /comments	500 comments
// /albums	100 albums
// /photos	5000 photos
// /todos	200 todos
// /users	10 users

// browser by default does "GET" request to server

