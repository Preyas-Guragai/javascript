/*
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

*/
//const=that can be changed;
let radius;
//let pi=3.1415;
const PI=3.1415; //capitalizing the constant is for primitive data case;
let circumference;
radius= window.prompt("enter the radius");
radius=Number(radius);
circumference=2*PI*radius;
console.log(circumference);