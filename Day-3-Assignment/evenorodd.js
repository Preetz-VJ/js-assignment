console.log("Check the given number is even or odd");
let input = +prompt("enter a number");
console.log("Input:",input);

let num=function(n1=0)
{
    if(n1%2==0){
        console.log(`Output: The number entered is ${n1} is even`);
    }
    else{
        console.log(`Output: The number entered is ${n1} is odd`);
    }
}
num(input);
