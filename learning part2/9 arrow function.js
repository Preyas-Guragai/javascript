// html file is learning part2.html

//arrow function= a concise way to write function expression good for 
//                simple functions that you use only once (parameter)=> some code;



/*
const hello=function (){

    console.log("hello");
}
    */
   
/////////////////////---------------this is example of function expression.
// -------------------- this same task can be done using arrow ------------------////////////////////////////////

//////////////////-------example-1----------/////////////////////
////////////////////////////////////////////////////////////////
/*

const hello=()=> console.log("hello");

hello();

//////////////////-------example-2----------/////////////////////
////////////////////////////////////////////////////////////////

const helllo=(name)=> console.log(`Hello ${name}`);
//           ^parameter
helllo("preyas"); //passed arguments


//////////////////-------example-3----------/////////////////////
////////////////////////////////////////////////////////////////

const Hello=(name)=> {console.log(`Hello  ${name}`);
//           ^parameter
console.log(`how are you`)};
Hello("preyas"); //passed arguments

//////////////////-------example-4----------/////////////////////
////////////////////////////////////////////////////////////////

const HEllo=(name,age)=> {console.log(`Hello  ${name}`);
//           ^parameter
console.log(`you are ${age} years old`)};
HEllo("preyas",19); //passed arguments

//////////////////-------example-5----------/////////////////////
////////////////////////////////////////////////////////////////

setTimeout(()=>{
    console.log("hello");
},3000);

//////////////////-------example-6----------/////////////////////
////////////////////////////////////////////////////////////////

///////previously we did all the filter, reduce, map method using function definition and function expression. now 
// this examples are of all the methods but using arrow function;

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const squaredNumbers = number.map((elements) => Math.pow(elements, 2));
console.log(squaredNumbers);


const even=number.filter((elements) => elements%2===0); //for a single statement, no need to use return;
console.log(even);

const sum= number.reduce((current_element, next_element) => current_element + next_element);
console.log(sum);

*/