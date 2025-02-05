// html file is learning part2.html

/////////////--------normal function V/S ----objects--- V/S consructors-------///////////////////

/*
//objects

const person1={
    firstName:"vengeance",
    lastName:"x",
    age:18,
    isStudent:true,
    
}
console.log(person1.firstName);

/// ✅ What is it?

//person1 is a single object, created using an object literal ({}).
//It is a static object, meaning you can’t create multiple person1 objects easily.
// Best for storing fixed data (e.g., settings, configurations, user profiles).

///normal function

function details(name, age,  address)
{
    const Name=name;
    const Age=age;
    const Address= address;

    console.log(Name);
}

details("preyas", 19, "ktm");
details("vengeance", 10000000, "gotham city");



// you wanted to store details of multiple person using normal function, 
// but it creates difficulty when it has to be displayed. console.log(name) creates confilct and prints 
// all the name provided as parameter
// i.e output here is preyas, vengeance both at a time;

// so here comes the play of constructor AND OBJECTS OF CONSTRUCTOR FUNCTIONS;




//////////////////////--------NORMAL FUNCTION AS STRUCTURED OBJECTS------------//////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////

//A normal function can be used to create structured objects, but it requires an explicit return statement

function createCar(make, model, year, color) {
    return {
        make: make,
        model: model,
        year: year,
        color: color
    };
}

const car1 = createCar("Ford", "Mustang", "2024", "Black");
console.log(car1.make);  
*/