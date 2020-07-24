console.log('hi');
let input;
    input=+prompt("enter the number greater than 100");
if(input>100)
{
    console.log(input);
}
else 
do{
    alert("enter the number greater than 100");
    input=+prompt("enter the number greater than 100");
}
while(input<=100)