// html file is learning part2.html

// object= A COLLECTION OF RELATED PROPERTIES AND/OR METHODS CAN REPRESENT REAL WORLD OBJECTS 
//            (PEOPLE, PRODUCTS, PLACES)
//   object= {key:value, function()}


/*
const person1={
    firstName:"vengeance",
    lastName:"x",
    age:18,
    isStudent:true,
    
}

const person2={
    firstName:"multi",
    lastName:"verse",
    age:18,
    isStudent:false,
    
}

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isStudent);

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isStudent);

console.log(`hey ${person1.firstName}`);

//////////////////////////example-2----------------///////////////////////////////
/////////////////////////////////////////////////////////////////////////////////


//      USE OF "THIS" IN THE OBJECTS;

const me={
    name:"preyas guragai",
    age:19,
   

    your_detail: function(){
      //  console.log(`hey ${name}. you are ${age} years old`);
      //            the above synatax of ${name} is not correct here in terms of accesing the properties of same obect. 
      //            the age, name here is not any variable. so to access properties of same objects, we use "this".
            console.log(`hey ${this.name}. you are ${this.age} years old`);
            // or you can use;
            console.log(this.name);
            console.log(`hey ${me.name}. you are ${me.age} years old`);
    }
}

me.your_detail();

//////////////////////////example-3----------------///////////////////////////////
/////////////////////////////////////////////////////////////////////////////////


//        USE OF ARROW FUNCTION IN THE OBJECTS;


const mYSELF={
    nameE:"preyas guragai",
    ageE:19,
   

    yourR_detail: ()=> {
      //  console.log(`hey ${name}. you are ${age} years old`);
      //            the above synatax of ${name} is not correct here in terms of accesing the properties of same obect. 
      //            the age, name here is not any variable. so to access properties of same objects, we use "this".
           
    
      //console.log(`THIS IS ARROW FUNCTION PART ${this.nameE}. you are ${this.ageE} years old`);
            // you cant use this in arrow function;


            console.log(this.name);
            console.log(`hey ${me.name}. you are ${me.age} years old`);
    }
}

mYSELF.yourR_detail();

//////////////////////////---------example-4-----------------////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

// arrow function and "this" in same code;


const film=
{
    name:"vengeance",
    year:2021,
    lead_actor: "batman",
    age:43,

    name_function: function()
    {
        console.log(`the film name is ${this.name}, release in the year ${this.year}`);
    },

    name2: function()
    {
        console.log(`the film name is ${film.name}, release in the year ${film.year}`);
    },

    //arrow function

    arrow_function: () => {
        console.log(`film is ${film.name}, released in the year ${film.year}`);
    },
}

film.name_function();
film.arrow_function();
film.name2();

*/