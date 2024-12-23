//-----------while loop-----------------
//repeats some code WHILE some condition is true
//while loop can be used to run the code for the infinite time
/* 
let username="";
 
 while(username==="")
 {
    username=window.prompt("Enter your Name: ");
 }
 console.log(`Your name is ${username}`);
 // in this code, prompt box appears asking input. if you keep on clicking OK button 
 // it will forever keep asking input and the box keep appearing. if you enter anyting
 //the condition inside while does not match. and while is terminated
//if you cancel the box the output is "NULL"

while(username==="" || username === null)
{
    username=window.prompt("Enter your Name:");
}
console.log(`Your name is ${username}`);
//here if you keep pressing OK button the box keeps appearing until you give input
//if you click cancel. the output is NULL. But in condition NULL is too included so if you
//  either press OK continuously and CANCEL continuously the box keep appearing until any input is given;

//------------DO WHILE LOOP----------------------------
//the body is at least run onr time before executing the condition

do{
    username=window.prompt("Enter your name: ");
}
while(username==="" || username === null)
    console.log(`Your name is ${username}`);



//--while example-------------

let loggedin=false; //i.e you are logged in
let username;
let password;
while(!loggedin) //while not logged in
//if you keep let----- loggedin=true;------ and run the code. nothing will appear since you are logged in
//  and condition inside while is for not logged in
    {
       username=window.prompt(`Enter your username`);
       password=window.prompt(`Enter your password`);

if(username==="username" && password==="password")

 {
    loggedin=true;
    console.log("you are logged in");
 }
 else
 console.log("invalid");

}


//////////////////---------FOR LOOP------------------//////////////
////////////////////////////////////////////////////////////////
//for loop is used to run code for limited time

for(let i=0;i<=5;i++)
{
    console.log(i);
}
for(let j=0; j<=10; j+=2)
{
    console.log(j);
}
console.log(" ");

for( let z=10; z>0;--z)
{
    console.log(z);
}
console.log("happy birthday");

////////////////----skip iteration------///////////////////
//////////////////////////////////////////////////////////
//"continue" just skips the specific iteration
let x;
for(x=1;x<=20;x++)
{
    if(x==13)
        continue //when x=13, it is skipped to next iteration 
    else
    console.log(x);
}
console.log("");
////////////////----break iteration------///////////////////
//////////////////////////////////////////////////////////
//when the condition is matched, the whole loop is terminated

let a;
for(a=1;a<=20;a++)
{
    if(a==13)
        break;//when x=13, the loop is terminated; 
    else
    console.log(a);
}
    */
/*
    ///////////////////////-------FUNCTION---------///////////////////////////
    /////////////////////////////////////////////////////////////////////////

    //if same code has to be repeated or used multiple times, we can use concept of function;

    function happyBirthday()
    {
        console.log("Happy Birthday To you !!");
        console.log("Happy Birthday To you !!");
        console.log("Happy Birthday To you !!");
    }
    happyBirthday();

    /////////////////-----FUNCTION WITH PARAMETERS---///////////////////
    
    function happiBirthday(username,age)
    {
        console.log("Happy Birthday To you !!");
        console.log(`Happy Birthday To you ${username} !!`);
        console.log(`you are ${age} years old !!`);
    }
    happiBirthday("vengeance", 19);


    //example of function

    function add(x,y)
    {
        let result=x+y;
        return result;
    }
   let result= add(2,3); 
   console.log(result);
   console.log(add(2,3)); //do same as two lines above.

//////////example/////////

function add(x,y)
{
    return x+y;
}

function sub(x,y)
{
    return x-y;
}

function multiply(x,y)
{
    return x*y;
}
   
console.log(add(2,3));
console.log(sub(2,3));

let res=multiply(2,3);
console.log(res);

//////////example//////////

function iseven(number)
{
    return number %2==0?true:false;
}

console.log(iseven(3));

//////////////example/////////

function isValidEmail(email)
{
    //using ternary operator 
    //return email.includes("@")?true:false;
if(email.includes("@"))
{
    return true;
    //console.log("This is a valid email");
}
else{
    return false;
    //console.log("Email invalid");
}
}
console.log(isValidEmail("vengeance@0.com"));
console.log(isValidEmail("vengeance0.com"));

*/

///////////////////-----VARIABLE SCOPE-----//////////////////
////////////////////////////////////////////////////////////

//variable scope = where a variable is recognized and accessible
                //global or local

//example of local variable

function function1()
{
    let x=3;
    console.log(x); 
}

function function2()
{
    let x=44;
    console.log(x);
}

function1();
function2();

//in above example x is used in both function1 and function2. if you have done let x=3 
//and let x =4; outside of the function, you would encounter error

////////////////////////--loacal variable example 2------/////////////

function function11()
{
    let x=32;
    console.log(x); 
}

function function22()
{
    let y=31;
    console.log(y);
}
function11();
function22();
//in the above example x is local to function11 and y is local to function22. 
//here, in this case, x cannot be accessed inside function22 and  y cannot be accessed inside of function11.

////////////////////---global variable-------////

let x=2062;
function111();
function1111();

function function111()
{
    console.log(x);
}
function function1111()
{
    console.log(x);
}

//here x is declared and assigned 2062 in the global. so, function111 and  function1111 are able to access the x.

////////////////-----global variable is overriden with local if same identifier is used----/////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////

let num=3;

function num1()
{
    let num=300; //num=3; global overiden by local num=300;
    console.log(num);
}

function num2()
{
    let num=30;  //num=3; global overiden by local num=30;
    console.log(num);
}

num1();
num2();

//output=300 and 30;

