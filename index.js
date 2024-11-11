/*
//console.log("hello");
//window.alert("this is an alert");
let fullName = "vengeance";
let age = 20;
let student = false;

//document.getElementById("p1").textContent = `Your name is ${fullName}`;
//document.getElementById("p1").textContent = `Your age is ${age}`;

//In your code, the 7th, 8th  lines aren’t executing as expected because each time you set
// textContent on p1, it overwrites any previous value. Only the last value assigned to p1 is displayed.

document.getElementById("p1").textContent = `Your name is ${fullName}`; //overides by the below sentence.
document.getElementById("p1").textContent= fullName; 
document.getElementById("p2").textContent = `Your age is ${age} years old`;
document.getElementById("p3").textContent = `Student status: ${student}`;
             
            //////////////////////////////
//operator precidence
//paranthesis
//exponents--- denoted by double star **
//muliplication,division and modulo
//addition and subtraction

let result=6/2**(2+5);
console.log(result);


//In JavaScript, window.prompt() is a method that displays a dialog box with a message,
//a text input field, and "OK" and "Cancel" buttons. It’s commonly used to get user input quickly.
let username;
username =window.prompt("what's your name?");
console.log(username);


{

let x=2 //outside the bracket x cannot be accessed. its like local scope.
//variable declared using let cannot be redeclared.
}

{
    var x=2 //Variables declared with varinside a { } block can be accessed from outside the block
    // variable declared using the var can be redeclared
}
//x=2; redeclaring;

*/
///////////////////////////////////////////////////////////////////////////////
/*what is hoisting??
//----->Hoisting in JavaScript means that JavaScript
 //moves variable and function declarations to the top of the scope before it executes the code.

sayHello(); // This works because of hoisting

function sayHello() {
    console.log("Hello!");
}
   
//////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////

//operators
let text="hello";
text += " world";
console.log(text);

let x=105;
x-=5;
console.log(x);
x*=5;
console.log(x);
x**=2;
console.log(x);
var xx="preyas";
xx+=" guragai";
console.log(xx);

/* In JavaScript, the right shift assignment operator (>>=) shifts the bits of a variable to the right by 
a specified number of places and then assigns the result back to the variable. Here's how it works:
x >>= y
---> x is the variable whose bits you want to shift.
--->y is the number of positions you want to shift x to the right.

How It Works:
The >> (right shift) operator moves each bit in x to the right by y places, 
discarding bits that fall off the end and filling in the leftmost bits based on the sign of x:

--->If x is positive, the new bits are filled with 0.
--->If x is negative, the new bits are filled with 1 (to preserve the sign).

This is known as sign-propagating right shift, which means it keeps the sign of the number
 (positive or negative) intact. After shifting, the >>= operator assigns the result back to x.
//for example;

let y = 8;      // binary: 00001000
y >>= 2;        // shift right by 2, binary: 00000010
console.log(y); // output: 2

//In this example, the binary representation of 8 is shifted right by 2 places, resulting in 2.

//Example with a Negative Number:
let yy = -8;     // binary: 11111000 (in 8-bit signed binary)
yy >>= 2;        // shift right by 2, binary: 11111110
console.log(yy); // output: -2
*/
/////////////////////////////////////////////////////////////////////////

//Left shift assignment operator
//for example;

let left_assignment = -100;
left_assignment<<= 5;
console.log(left_assignment);

/*Here's what happens step-by-step:

Starting Value of x (-100):

In binary (using a 32-bit two's complement representation), -100 is represented as:
Copy code
11111111 11111111 11111111 10011100
Left Shifting by 5 (x <<= 5):

Shifting left by 5 means moving each bit 5 positions to the left, and filling the 5 rightmost
 bits with 0s. The left shift effectively multiplies the number by 
2^5 or 32.
The new bit pattern becomes:
Copy code
11111111 11111111 11111001 11000000
Resulting Value:

The resulting binary value, 11111111 11111111 11111001 11000000, is -3200 in decimal.
Explanation
When left-shifting a negative number in two's complement, the shift operates the same as for positive numbers. 
The left shift by 𝑛 bits multiplies the value by 2^𝑛. So, -100 << 5 is equivalent to 
-100*2^5
=-100*32
the value of x becomes -3200

////////////////////////////////////////////////////////////////////////////////////////////////////////////