// html file is learning html part2.html

//  .reduce()= reduce the element of an array to a single value 

//////////////////////----------example 1----------------//////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////// 
/*

const prices=[1,2.543,3,4,5,6,7,8,9];

const total=prices.reduce(sum);
//console.log(`the total price is $ ${total}`);
console.log(`$${total.toFixed(2)}`);                 // This will properly format the total to two decimal places.
    // it means if there are more values than 2 after deciman than only 2 are printed neglecting other;
function sum(current_element, next_element)
{
    return current_element+next_element;
}


//The reduce method in JavaScript is used to combine all elements of an array into a
//  single value by repeatedly applying a specified function to each element. It starts
//  by taking the first two elements of the array (1 and 2 in this case) and applying the
//  sum function, which simply adds them together, resulting in 3. This intermediate result (3)
//  is then passed as the first argument (current_element) to the next call of the sum function,
//  while the next element in the array (3) is passed as the second argument (next_element). 
// The sum function adds these values to get 6. This process is repeated for each subsequent
//  element in the array. For example, 6 and 4 are added to get 10, 10 and 5 to get 15, and
//  so on. This continues until all elements have been processed, with the result of each 
// addition being used as the current_element for the next call. Ultimately, the final result after 
// processing all elements is 45, which is assigned to the total variable. The reduce method thus 
// effectively sums up all the elements in the array, progressively accumulating the result with each iteration.

//////////////////////----------example 2----------------//////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////// 

let grades=[23,45,67,90,56];

const max=grades.reduce(getmax);
console.log(max);

function getmax(accumulator, element)
{
    return Math.max(accumulator,element);
}

const min=grades.reduce(getmin);
console.log(min);

function getmin(accumulator,element)
{
    return Math.min(accumulator, element);
}
    */