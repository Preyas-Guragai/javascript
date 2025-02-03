// html file is learning html part2.html

//function declaration=define a reusable block of code that 
//                      performs a specific task

/* for example

hello();
function hello()
{
console.log("hello");
}
*/


////////////////----------FUNCTION EXPRESSION-----------/////////////////////
////////////////////////////////////////////////////////////////////////////

// FUNCTION EXPRESSION=A WAY TO DEFINE FUNCTION AS VALUES OR VARIABLES

const hello=function (){

    console.log("hello");
}

//hello(); //prints immediately hello;
setTimeout(hello,1500); //prints hello after 3 sec       //#1

//or 

setTimeout(function(){   // this and #1 is same;
    console.log("hi")
}, 3000);


///////---PREVIOUSLY WE USED FUNCTION DECLARATION IN .MAP() METHOD. 
// -----------------BUT NOW WE ARE USING .MAP() WITH FUNCTION EXPRESSION ----------/////////////////////////

const numbers=[1,2,3,4,5];

const squares=numbers.map(function(element){
    return Math.pow(element,2)}
);

console.log(squares);


///////---PREVIOUSLY WE USED FUNCTION DECLARATION IN .filter() METHOD. 
// -----------------BUT NOW WE ARE USING .filter() WITH FUNCTION EXPRESSION ----------/////////////////////////
 
//seperating even and storing in an array;
const number=[1,2,3,4,5];

const even=number.filter(function(elements){
    return elements%2==0;
});

console.log(even);

//seperating odd and storing in another new array;
const odd=number.filter(function(each_element_of_array_is_passed_one_by_one){
    return each_element_of_array_is_passed_one_by_one%2!=0;
});

console.log(odd);

///////---PREVIOUSLY WE USED FUNCTION DECLARATION IN .reduce() METHOD. 
// -----------------BUT NOW WE ARE USING .reduce() WITH FUNCTION EXPRESSION ----------/////////////////////////

const marks=[90,,56,45,34,67,78];

const total_mark=marks.reduce(function(first_element, second_element){
    return first_element+second_element;
});

console.log(total_mark);

//benefits
// 1. no need to think of function names

//demerits
// this function can not be reused. it is used once.
  