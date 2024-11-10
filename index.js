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

let x=2 //outside the bracket x cannot be accessed. its lile local scope.
//variable declared using let cannot be redeclared.
}

{
    var x=2 //Variables declared with varinside a { } block can be accessed from outside the block
    // variable declared using the var can be redeclared
}
//x=2; redeclaring;