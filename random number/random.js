const label1=document.getElementById("label1");
const label2=document.getElementById("label2");
const label3=document.getElementById("label3");
const label4=document.getElementById("label4");
const myButton=document.getElementById("myButton");
const min=1;
const max=6;
let randomNum1;
let randomNum2;
let randomNum3;
let randomNum4;

myButton.onclick=function(){
    randomNum1=Math.floor(Math.random()*max)+min;
    randomNum2=Math.floor(Math.random()*max)+min;
    randomNum3=Math.floor(Math.random()*max)+min;
    randomNum4=Math.floor(Math.random()*max)+min;
    label1.textContent=randomNum1;
    label2.textContent=randomNum2;
    label3.textContent=randomNum3;
    label4.textContent=randomNum4;
}
