//-----------while loop-----------------
//repeats some code WHILE some condition is true
 let username="";
 /*
 while(username==="")
 {
    username=window.prompt("Enter your Name: ");
 }
 console.log(`Your name is ${username}`);
 // in this code, prompt box appears asking input. if you keep on clicking OK button 
 // it will forever keep asking input and the box keep appearing. if you enter anyting
 //the condition inside while does not match. and while is terminated
//if you cancel the box the output is "NULL"
*/
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


