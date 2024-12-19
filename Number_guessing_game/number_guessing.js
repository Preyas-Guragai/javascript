const minNum=1;
const maxNum=100;
//Math.random(); generates random number; int or float
//Math.floor(Math.random()); genrates only int random value;
const answer= Math.floor(Math.random() *(maxNum-minNum+1))+minNum;

console.log(answer);

let attempts=0;
let guess;
let running=true;

while(running)
{

    guess=window.prompt(`Guess a Number between ${minNum} - ${maxNum}`); //value taken from window.prompt 
    // is string type //check
    //console.log(typeof guess, guess); //output =string 

    guess=Number(guess); //typecasting string to number;
    //console.log(typeof guess, guess); now output=number

    if(isNaN(guess))
    {
        window.alert("Please enter a valid Number");
    }
    else if(guess<minNum || guess>maxNum)
    {
        window.alert("Please enter a valid Number");
    }
    else
    {
        attempts++;
        if(guess<answer)
        {
           window.alert("Too low. Try higher");
        }
        else if(guess>answer)
        {
            window.alert("Too High. Try Lower");
        }
        else{
            window.alert(`CONGRATULATIONS.The number is ${answer}. It took you ${attempts} attempts`);
            running=false;
        }
    }
}