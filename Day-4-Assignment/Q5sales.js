console.log("sales");
let sales=+prompt("enter the sales during this year");
console.log(`your sales during this year is " ${sales} " `);
let commision;
let earned = function(n) {
    if(sales<=5000)
    {
       commision = sales*0.02;

    }
    else if(sales<=10000)
    {
       commision = (5000*0.02)+(sales-5000)*0.05;
        
    }
    else if(sales<=20000)
    {
        commision = (5000*0.02)+((sales-5000)*0.05) + 
        ((sales-10000)*0.07);
        
    }
    else
    {
        commision = (5000*0.02)+((sales-5000)*0.05) +
         ((sales-10000)*0.07) + ((sales-20000)*0.1);
        
    }
    return commision;
}

let result= earned(sales);
console.log(`total commision earned by you is " ${result} " `);