//part 3
// this html file is linked to html file learning part2.html

///////////////////////////-------CALL BACKS IN JS----------///////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

// CALL BACK = A FUNCTION THAT IS PASSED AS AN ARGUMENTS TO ANOTHER FUNCTION 

//         used to handle asynchronous operations:
//    1. READING A FILE   
//    2. NETWORK REQUEST 
//    3. INTERACTING WITH DATABASE

//     hey when you are done , call the next.
/*

hello(); 
goodbye();
function hello()
{
       setTimeout(function() {
        console.log("hell0!");
       }, 3000);
        

}

function goodbye()
{
        console.log("goodbye!");
}

// if you see this code hello is invoked first and it has to be executed first than goodbye but see the function 
// content. there is set settimeout; delays the execution of the program by 3 sec(3000=3sec);

//  but this can be written in short way which is callback 

hello(goodbye); //passing function goodbye. make use only pass name of the function and not paranthesis.\

function hello(fn)
{
        console.log("hell0!");
        fn();
        console.log(" control retunred back")

}

function goodbye()
{
        console.log("goodbye!");
}
// hello(goodbye)  --->  console.log("hello!")  --->  callback()  --->  goodbye()
//   --->  console.log("goodbye!")  --->  (end of goodbye)  --->  (return to hello)  --->  (end of hello)


//why returning control to hello?
//---->goodbye is passed as an arguments in hello function. inside hello, callback is named fn.
//after hello is run, callback is called, here hello is calling function. after goodbye is executed the control
// is returned back to calling function.
*/



//-----------example------------------//
/*name(caste);

function name(callcaste)
{
        console.log(" my name is preyas");
        callcaste();
}
*/
/*
name(age);
function name(callage)
{
        console.log(" my name is preyas");
        callage();
}
function caste()
{
        console.log("guragai");
}

function age()
{
        console.log("i'm 19 years");
}
*/

/*
/////////////---------example---------------//

sum(displayresultatconsole, 1, 5);
function sum(callback, x,y)
{
        let result=x+y;
        callback(result);
        console.log("after printing result control flow back to calling function");
}
 
function displayresultatconsole(result)
{
        console.log(`result is ${result}`);
}

//The given code defines two functions, sum and displayresultatconsole. The sum function
//  takes three parameters: callback, x, and y. It calculates the sum of x and y, stores
//  the result in the variable result, and then calls the callback function, passing result
//  as an argument. After calling the callback, it prints a message indicating that control
//  flow will return to the calling function. The displayresultatconsole function, which is
//  passed as the callback to sum, takes a single parameter result and prints it to the console.
//  When sum(displayresultatconsole, 1, 5) is called, it executes the sum function with displayresultatconsole 
// as the callback, 1 as x, and 5 as y. Inside sum, result is calculated as 6, and displayresultatconsole(6)
//  is called, which prints result is 6. Finally, the message "after printing result control flow back to
//  calling function" is printed by the sum function. Thus, the code demonstrates how to use a callback
//  function to handle the result of an operation within another function.
*/