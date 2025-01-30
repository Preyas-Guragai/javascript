// html files is learning part2.html


// .map()= accepts the callback and applies that 
//                  function to each element of an array , then return a new array

// very similar to the forEach() method. but map() reurns new array;
/*
const numbers=[1,2,3,4,5];
const squares=numbers.map(square);

console.log(squares);


function square(element)
{
    return Math.pow(element,2);
}

//Is numbers.map(squares) after the program is returned changed to const squares=[1, 4, 9, 16, 25]?
//----->The expression numbers.map(square) returns a new array [1, 4, 9, 16, 25] which is then assigned
//  to the variable squares. This assignment happens as soon as the map function completes its execution.
//  So, while the array itself is not explicitly written as const squares=[1, 4, 9, 16, 25] in the code,
//  that's effectively the value that squares holds after the map function runs. In other words, the
//  transformation from [1, 2, 3, 4, 5] to [1, 4, 9, 16, 25] occurs through the map function, and
//  squares stores this transformed array.

const cube=numbers.map(cubes);
console.log(cube);

function cubes(elements)
{
    return Math.pow(elements, 3);
}

////////////////////-----------example 2-------------///////////////////////////
///////////////////////////////////////////////////////////////////////////////

const riots=["juggernaut","bitmap","clipper", "luffy"];

const after_uppercase=riots.map(uppercase);
console.log(after_uppercase);

function uppercase(each_elements_of_array_riots_is_passed_one_by_one)
{
    return each_elements_of_array_riots_is_passed_one_by_one.toUpperCase();
}

// .map is similar to forEach() but it creates new arary. riots.map(uppercase); riot array is mapped and 
// function uppercase is passed as an arguments. while passing element, one by one elements are passed like forEach();
// then uppercase function is executed and after the execution is complete 
// the control is back to the const after_uppercase and new array returned is stored in the after_uppercase.
// and control moves down to console.log(after_uppercase);

//here the riots array is uppercased.


const lower_case_again=riots.map(to_lowercase);
console.log(lower_case_again);

function to_lowercase(change_again_to_lower_case)
{
    return change_again_to_lower_case.toLowerCase();
}

///// -------------or---------------////
/*
const lc=after_uppercase.map(tolc);
console.log(lc);

function tolc(change_again_to_lower_case)
{
    return change_again_to_lower_case.toLowerCase();
}
*/

