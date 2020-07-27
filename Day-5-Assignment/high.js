console.log('Fetch API');

// https://jsonplaceholder.typicode.com/todos

// Making a get request
fetch('https://jsonplaceholder.typicode.com/todos')
.then(response=>response.json())
.then(data=>console.log(data))

let obj = {
    userId:254,
    title:"Some Title",
    body:'lorem ipsum',
}

// Make a post Requests
fetch(' https://jsonplaceholder.typicode.com/todos',{
    method:'POST',
    body: JSON.stringify(obj)
}).then(response=>response.json())
.then(data=>console.log(data))


// jokes api

async function fetchJokes(){
    const response = await fetch(' https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();

    console.log(data);
}

fetchJokes();


let obj1 = {
    name:'Preet',
    age:23,
    cansing:true,
}

console.log(obj1);
let str = JSON.stringify(obj1);
console.log(str)

let strobj = JSON.parse(str);
console.log(strobj)