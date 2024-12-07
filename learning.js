/* part 1
let username;
document.getElementById("mySubmit").onclick= function()
{
   username= document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myH1").textContent= `hello ${username}`


};

//type conversion 
let age=window.prompt("how old are you");
age+=1;
console.log(age, typeof age);
let agge=window.prompt("how old are you");
agge=Number(agge);
console.log(agge, typeof agge);

let x= "preyas";
let y= "preyas";
let z= "preyas";

x=Number(x);
y=String(y);
z=Boolean(z);
console.log(x, typeof x);
console.log(x, typeof y);
console.log(x, typeof z);

let a= "0";
let b= "0";
let c= "0";

x=Number(a);
y=String(b);
z=Boolean(c);
console.log(x, typeof x);
console.log(x, typeof y);
console.log(x, typeof z);


///////////////////////////////const=that can be changed; 

PART 2;

let radius;
//let pi=3.1415;
const PI=3.1415; //capitalizing the constant is for primitive data case;
let circumference;


console.log(circumference);

document.getElementById("mySubmit").onclick=function()
{
   radius= document.getElementById("mytext").value;
   circumference=2*PI*radius;
   document.getElementById("myh3").textContent=circumference +"cm";

}
   */

  /////////////////////maths objects?///////////////////////
//console.log(Math.PI);//3.1415
//console.log(Math.E); //2.7182
//let x=4.8;
//let y=8.1;
//let a=10;
//let xx=-3.14
//let z=Math.round(x);//rounds the x i.e 3.1415 to 3 and 3.8 to 4. //normal rounding
//let z=Math.floor(x);//rounds down.i.e 4.8 to 4
//let z=Math.ceil(y); //rounds up i.e if x is 8.1 to 9
//let z=Math.trunc(y); //x is 4.8 trunc to 4 and x 8.1 is trunced to 8;
//let z=Math.pow(a,3);
//let z=Math.sqrt(a);
//let z=Math.log(a);
//let z=Math.sin(45);
//let z=Math.abs(xx); //absolute value
//console.log(z);      
 
//display maximum value
//let x=3;
//let y=2;
//let z=1;
//let max=Math.max(x,y,z);
//console.log(max);
///////////////////////display minimum value
//let min=Math.min(x,y,z);
//console.log(min);

/////////////////////////////////////////// RANDOM NUMBER GENERATION ////////////////////////////////  
/*
let randomNum= Math.floor(Math.random()*5)+1;
//random number genrate from 0 to 1 --->let randomNum=Math.random();
//random number from to 5-->let randomNum=Math.random()*5;
//generate random number between 0 and 5, but dont want decimals--->let randomNum= Math.floor(Math.random()*5);
//generate random number with minimum 1-->let randomNum= Math.floor(Math.random()*5)+1;
console.log(randomNum);

/////random number from 50 to 100//////
const min=50;
const max=100;
let randomNumber=Math.floor(Math.random()*(max-min)+min);
//max-min is done so that the range is set correctly;
console.log(randomNumber);
*/
/////////////////////////////////////////////////////////////////////////////////
/////////////////////         IF STATEMENTS ARE EASY       //////////////////////////////////////////
/*let age=25;
let haslicense=true;
if(age>18)
{
   console.log("you are eligible");
   if(haslicense)
   {
      console.log("you has a license");

   }
   else 
   {
      console.log("you do not have a license yet"); 
   }
   
}
let time;
time=window.prompt("enter time");
if(time<12)
{
   console.log("morning");
}
let student;
student =true;
if(student)
{
   console.log("you are a student");

}
else
console.log("you are not a student");

*/

// part 3//////////

const myText=document.getElementById("myText");
const mySubmit=document.getElementById("mySubmit");
const resultElement=document.getElementById("resultElement");
let age;
mySubmit.onclick=function()
{
   age=myText.value;
   //input from input box is a string type. so typecast to number is necessary;
   age=Number(age);
   
         
            if (age>=100)
   {

      resultElement.textContent=`you are too old`
   }
   if (age==0)
      {
         resultElement.textContent=`you are just a day old`
      }
      if (age>=18)
         {
            
            resultElement.textContent=`you are good to go`
         }
      if (age<18){

      
               resultElement.textContent=`you are  not capable`
            }
}
