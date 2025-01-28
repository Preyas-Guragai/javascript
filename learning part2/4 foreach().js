// part 4
// html file in learning part2.html

////////////---------------------------foreach();----------------/////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

//            for each =method that is used to iterate over the elemants of an array 
//                     and apply a specified function (callback) for each element   
//                   array.forEach(callBack)
// whenever the forEach() is used the parameters are passed in order of 
//                      current element, current index and array. see ex.2.

/*
let numbers=[1,2,3,4,5];

numbers.forEach(display);

function display(x)
{
    console.log(x);
}
*/

//The forEach method automatically calls the provided callback function (in this case, display) 
// for each element in the array. When it calls the display function, it passes the current element 
// as an argument to it.

//Essentially, the forEach method does something like this internally:
// for (let i = 0; i < array.length; i++) {
  //  callback(array[i], i, array);}
 // Passes the current element, index, and the array

///////////////////--------EXAMPLE 2--------------//////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
/*
let number=[1,2,3,4,5];

number.forEach(double); //calls the double function and updates the current array.
number.forEach(dispplay);

function double(element, index, array) //the number array is passed in order element, index and array.
{
    array[index]= element *2;
}

function dispplay(x)
{
    console.log(x);
}
*/
//////////////--------square function using example 2-----------//////////////////////
/////////////////////////////////////////////////////////////////////////////////////

/*
let numberr=[1,2,3,4,5];

numberr.forEach(square); //calls the double function and updates the current array.
numberr.forEach(dissplay);

function square(element, index, array)
{
    array[index]=Math.pow(element,2);
}

function dissplay(x)
{
    console.log(x);
}

*/

/////////////////-------example-3--------///////////////////////////////////
///////////////////////////////////////////////////////////////////////////
/*
let fruits=["apple", "mango", "banana", "orange"];

fruits.forEach(uppercase);
fruits.forEach(display);

function uppercase(element, index, array)
{
array[index]=element.toUpperCase(); 
}

function display(each_element_of_array_is_passed)
{
    console.log(each_element_of_array_is_passed);
}
    */