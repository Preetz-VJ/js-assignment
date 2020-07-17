console .log("Marks!!");
let mark=+prompt("enter your mark");
console.log("Input:",mark);

// 1.if else if method
let grade=function(n1=0)
{
    if(n1>=90 && n1<=100){
        console.log(`Marks are ${n1} and grade is O`)  
    }
   
    else if(n1>=70 && n1<90){
        console.log(`Marks are ${n1} and grade is A`)
    }

    else if(n1>=60 && n1<70){
        console.log(`Marks are ${n1} and grade is B`)   
    }

    else if(n1>=40 && n1<60){
        console.log(`Marks are ${n1} and grade is C`)   
    }

    else if(n1>=0 && n1< 40){
        console.log(`Marks are ${n1} and grade is E`)    
    }
    else
    console.log("invalid");
 
}

grade(mark);

//2. ternary method

// let grade =(mark>=90 && mark<=100)? "O":
//             (mark>=70 && mark<90)? "A": 
//             (mark>=60 && mark<70)? "B":
//             (mark>=40 && mark<60)? "C":  
//             (mark>=0 && mark<40)? "E":"INVALID";

            
//  let n=(mark>=0 && mark<=100)?console.log(`Marks are ${mark} and grade is ${grade}`):console.log("invalid");          

