let a,b,c;
let d=[];
let arr=[];
a=+prompt("enter no. of nos");
for(c =1;c<=a;c++){
    b=+prompt("enter the no.");
    arr.push(b);
   d= arr;
}
console.log(d)
let odd = d.filter(e => e%2 !== 0)
console.log(odd)
let cube =odd.map(e=> e**3)
console.log(cube)