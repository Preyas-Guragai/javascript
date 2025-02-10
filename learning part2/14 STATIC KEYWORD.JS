// html file is learning part2.html

// STATIC =  KEYWORD THAT DEFINES PROPERTY OR METHOD THAT BELONGS TO A CLASS ITSELF 
//            RATHER THAN THE OBJECTS CREATED FROM THAT CLASS (CLASS OWNS THE STATICS NOT THE OBJECTS)





  ///////////////////////////-------------example--------------------//////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////

  // use of static method;

  class mathematics{
    static pi=3.1415;

    static circumference(radius)
    {
    return (2*this.pi*radius);
   
    }
  }

  console.log(mathematics.circumference(10));
  


  ////////////////////-------------OR--------------------------//////////////////
  // USING RETURN AND WITHOUT USING RETURN WHEN CALLING BY FUNCTION;
  //////////////////////////////////////////////////////////////////////////////

  class mathematics{
    static pi=3.1415;

    static circumference(radius)
    {
    
    let result=2*this.pi*radius;
    console.log(result);
    }
  }
  mathematics.circumference(10);