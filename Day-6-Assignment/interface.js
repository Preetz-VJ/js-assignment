console.log("Welcome")


const name = prompt("Enter your name","Anonymous");

title.innerText = `Welcome to the family ${name}`;

const dmode = document.getElementById("dark");

dmode.onclick = function changeColor(){
    
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'red';
    document.body.style.fontFamily = 'Helvetica';
   
}

    
const ctime = document.getElementById('time');


function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    ctime.innerText = time;
}

// clock();

setInterval(clock,1000);

