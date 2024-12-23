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
   