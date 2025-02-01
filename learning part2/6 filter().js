// html file is learning part2.html

// .filter()=   creates new array by filtering out  ELEMENTS.


///////////////---------example 1---------------//////////////////////////
/////////////////////////////////////////////////////////////////////////

/*
let numbers=[1,2,3,4,5,6,7];
let even_number=numbers.filter(even);
console.log(even_number);

function even(element)
{
            //         if(element%2==0)
           //       {
          //        let n=element;
         //        console.log(n);
        //        }
      
   //this above filters even but not in the form of array;
        //instead do

        return element%2==0;
}


///////////////////---------example-2-----------------/////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

/*
let odd_number=numbers.filter(odd);
console.log(odd_number);

function odd(element)
{

        return element%2!==0;
}


///////////////////---------example-3-----------------/////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
let ages=[18,11,13,5,23,19,43,22];

let eligible_candidates=ages.filter(age_definer);
console.log(eligible_candidates);

function age_definer(age)
{
    return age>=18;
}

///////////////////---------example-3-----------------/////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////


let fruits=["apple", "mango", "banana", "jackfruit", "papaya"];

let short_array=fruits.filter(short_word);
console.log(short_array);

let long_array=fruits.filter(long_word);
console.log(long_array);


function short_word(elementt)
{
    return elementt.length<=5;
}

function long_word(elementt)
{
    return elementt.length>5;
}

//this code seperates word less and more than 6 alphabet character and makes seperate array;
*/