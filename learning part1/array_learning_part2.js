//this is linked to  html file learning.html

///////////////////-----------ARRAY--------------/////////////

//ARRAY=variable like structure that can hold more than one value

/*
let fruit=["apple", "orange", "Banana"]

console.log(fruit); //gives all the values inside the array
console.log(fruit[0]); //apple
console.log(fruit[1]); //orange
console.log(fruit[2]); //banana


let fruit=["apple", "orange", "Banana"]

fruit[0]="coconut";// changes the value at index 0 of the arrray.
console.log(fruit[0]); //cocunut
console.log(fruit[1]); //orange
console.log(fruit[2]); //banana

console.log(fruit[3]); //this is undefined because in the array there is only values upto index 2
 //i.e index{0,1,2} = fruits ["apple", "orange", "Banana"]



 //////////////////----------- array_name .PUSH -------/////////////////////
 //////////////////////////////////////////////////////////////////////////


 let fruit=["apple", "orange", "Banana"]


console.log(fruit[0]); //apple
console.log(fruit[1]); //orange
console.log(fruit[2]); //banana
//console.log(fruit[3]); //this is undefined there is no index 3 but

//.push adds any value at the end,increasing the index

fruit.push("cocunut");
console.log(fruit[3]);
//in the original array is 2 index but .push increased the array size.
//  after .push the array is similar to  let fruit=["apple", "orange", "Banana", "coconut"]



//////////////////----------- array_name .POP -------///////////////////////

//removes the last index value and decreases the size of the array
let fruit=["apple", "orange", "Banana"]
console.log(fruit[0]); //apple
console.log(fruit[1]); // orange

fruit.pop();//removes index[2]; 
console.log(fruit[2]); //undefined

//after .pop the array is similar to  let fruit=["apple", "orange"]



//////////////////----------- array_name .unshift -------///////////////////////


let fruit= ["apple", "orange", "Banana"];
fruit.unshift("coconut"); //the array is now similar to --let fruit= ["coconut","apple", "orange", "Banana"];
// .unshift added the value at the index 0 pushing the previous index 0 value to index 1 and so on....
console.log(fruit[0]); // coconut
console.log(fruit[1]); // apple
console.log(fruit[2]); // orange
console.log(fruit[3]); //banana

//initially, the array is of size 3. i.e only upt0 index 2.
//but after the .unshift, the index 0 value is chnaged and the prevoius index 0 
// value is now at index 1 and adjacent values are shifted  by index value 1.



///////////////////----- .shift-----------///////////////////////////
////////////////////////////////////////////////////////////////////

let fruit= ["apple", "orange", "Banana"];
fruit.shift(); //now the array is similar to let fruit= ["orange", "Banana"];

// .shift removes the inital index 0 value and after then shifts index 1 value to index 0
//  and adjacent other index are decreased to -1
console.log(fruit[0]); // orange
console.log(fruit[1]); // banana
console.log(fruit[2]); // undefined
console.log(fruit[3]); //undefined



///////////////----.INDEXOF() IN ARRAY-----///////////////////////
/////////////////////////////////////////////////////////////////
let fruits=["mango","apple","banana","orange","kiwi"];
let index=fruits.indexOf("mango");
console.log(index); //0

let index=fruits.indexOf("banana");
console.log(index);//2
*/

///////////////-------loops in arrays---------/////////////////////////
//////////////////////////////////////////////////////////////////////

let fruits=["mango","banana", "orange","kiwi","watermelon","papaya"];

for(i=0; i<fruits.length; i++) //.length finds the total size of array
{
    console.log(fruits[i]);
}
//shortcut without using for loop

for(let fruit of fruits) //displays all the values of arrays named fruits
{
    console.log(fruit);
}