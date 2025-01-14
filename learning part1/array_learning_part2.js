//this is linked to  html file learning.html

///////////////////-----------ARRAY--------------///////////////
///////////////////////////////////////////////////////////////

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
///////////////////////////////////////////////////////////////////////////

//removes the last index value and decreases the size of the array
let fruit=["apple", "orange", "Banana"]
console.log(fruit[0]); //apple
console.log(fruit[1]); // orange

fruit.pop();//removes index[2]; 
console.log(fruit[2]); //undefined

//after .pop the array is similar to  let fruit=["apple", "orange"]



//////////////////----------- array_name .unshift -------///////////////////////
///////////////////////////////////////////////////////////////////////////////

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

*/

/*

///////////////-------reversing array---------/////////////////////////
//////////////////////////////////////////////////////////////////////

//array_name.sort()
//array_name.sort().reverse();------>syntax

let Usernames=["Preyas","Samar","Arik","Ayush","Prince"];
Usernames.sort(); //sorts array in alphabetical order
Usernames.sort().reverse();//sorts array alphabetically and but in reverse---z,x,w-----c,b,a; 


for(let i=0; i<Usernames.length; i++)
    {
        console.log(Usernames[i]);
    }

    //////////////////////////-----------shortcut--------------///////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////
    /*
for(let Username of Usernames)
    {
        console.log(Username);
    }
*/

/*
let nums=["1","2","3","4"];
nums.sort(); //sorts ascending to descending

for(let num of nums)
{
    console.log(num);
}


nums.sort().reverse(); //sorts descending ascending to

for(let num of nums)
{
    console.log(num);
}


 ////////----------------taking input from the user and storing array---------////////////////////////////////////
 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                            // .push(); adds the array at the end;

    let input=window.prompt("enter the size of array");
    input=Number(input);
    let item=[]
    for(i=0; i<input; i++)
    {
        let ask=prompt("enter the array");
        item.push(ask);
    }
    console.log(item);

     
/////////////////----------------shortcut-----------------////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

const fruits = ["apple", "banana", "cherry"];

for (let fruit of fruits) {
    console.log(fruit); // Prints each fruit in the array
}


In this example:

fruits is an array containing three strings: "apple", "banana", and "cherry".

for (let fruit of fruits) iterates over each element of the fruits array.

During each iteration, fruit is assigned the value of the current element in the fruits array.

console.log(fruit) prints the current fruit to the console.


*/
   


/////////////////-----2D ARRAY---------2D ARRAY------------2D ARRAY------------2D ARRAY----------------////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//2D ARRAY= MULTI-DIMESNIONAL ARRAY THAT CAN STORE A MATRIX 
//           OF DATA IN THE ROW AND COLUMN
//         USEFUL FOR GAMES, SPREADSHEETS, OR REPRESENTING IMAGES;


//       [x,o,x]
//       [x,o,x]
//       [x,o,x]

// const matrix=[[1, 2 ,3],[3, 4, 5], [6, 7, 8]];

//               for(let row of matrix)
//                  {
//                     console.log(row);
//                   }            
                   
/*
for(let row of matrix)
{
    const rowString=row.join(); //puts all the rows systematically
    console.log(rowString);
}
 

/////////--------modifying the array------///////////
//modifying the array and dispaying the rows systematically.
matrix[0][0]="x";
matrix[1][1]="x";
matrix[2][2]="x";
matrix[0][2]="x";
matrix[2][0]="x";

for(let row of matrix) //each row is an array itself.
    {
        const rowString=row.join(" "); //puts all the rows systematically
        console.log(rowString);
    }

*/

/////////////////////------POINT TO BE NOTED-------/////////////////////
///////////////////////////////////////////////////////////////////////

let fruits=["mango","apple","banana","orange","kiwi"]; //----->CORRECT
 let fruits=[mango,apple,banana,orange,kiwi];//----->INCORRECT
 let number = [1, 2, 3, 4, 5];  //----->CORRECT
 
//                Here, number is an array of numerical values. Each value is written as a number
//                (without quotes), which is the correct way to represent numbers in JavaScript.

//        In this case, JavaScript will interpret mango, apple, banana, orange, and kiwi as variables, not strings. 
//        If these variables are not previously defined, it will throw an error because 
//        it won't know what these names refer to.



   
//////////////////////----------------spread operator------------////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

//             represented by three dot. (...)
//             allows an iterable such as array or string to be expanded into seperate elements(unpacl the elements)


let name=[p,r,e,y];
console.log(name);
