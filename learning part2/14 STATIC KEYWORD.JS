// html file is learning part2.html

// STATIC =  KEYWORD THAT DEFINES PROPERTY OR METHOD THAT BELONGS TO A CLASS ITSELF 
//            RATHER THAN THE OBJECTS CREATED FROM THAT CLASS (CLASS OWNS THE STATICS NOT THE OBJECTS)



/*
class maths{
    static PI=3.1415;
}
console.log(maths.PI);

/*
const m1=new maths();
console.log(m1.PI);

this way by creating the instancem you cant access the static property, because pi
is same for all the objects created

PI is defined as a static property of the class maths. 
Static properties belong to the class itself, not to any
 instance of the class. This means that you should access static
  properties directly through the class, not through an instance.

  */


  ///////////////////////////-------------example 2--------------------//////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////

  // use of static method;

  /*
  class mathematics{
    static pi=3.1415;

    static circumference(radius)
    {
    return (2*this.pi*radius).toFixed(2);
   
    }
  }

  console.log(mathematics.circumference(10));
  


  ////////////////////-------------OR--------------------------//////////////////
  // USING RETURN AND WITHOUT USING RETURN WHEN CALLING BY FUNCTION;
  //////////////////////////////////////////////////////////////////////////////

  class maAthematics{
    static pi=3.1415;

    static circumference(radius)
    {
    
    let result=2*this.pi*radius;
    console.log(result.toFixed(2));
    }
  }
  maAthematics.circumference(10);


  /////////////////////////----------------example 3---------------------////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////

// MULTIPLE STAIC METHODS IN CLASS.....


class maathematics{
    static pi=3.1415;

    static circumference(radius)
    {
    return (2*this.pi*radius).toFixed(2);
  }
  static area(length)
    {
    return (Math.pow(length,2));
  }
  static display()
  {
    console.log("without using return");
  }
}
console.log(maathematics.circumference(10));
 console.log(maathematics.area(10));

 maathematics.display(); //calling static display function ;


 /////////////////////////----------------example 4---------------------////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

/*
  class user{
    static userCount=0;

    constructor(username)
    {
        this.username=username;
        user.userCount++;
    }
  }
  
  const user1=new user("vengeance");

  }
  //   console.log(user1.userCount); // you will get this undefined because userCount
  //                                      belongs to the class not the property;
  //    the correct way is 

  console.log(user.userCount);



*/
/*
/////////////////////////----------------example 5---------------------////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
  class User {
    static userCount = 0;

    constructor(username) {
        this.username = username;
        User.userCount++;
    }
}

const users = [];
for (let i = 0; i < 5; i++) {
    let username = window.prompt("Enter the name of the user");
    users.push(new User(username));
}

console.log(User.userCount);
*/