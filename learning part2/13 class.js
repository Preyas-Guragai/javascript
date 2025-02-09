// html file is learning part2.html

// CLASS = (es6 feature) provides more structured and cleaner way to work with objects compared 
//         to traditional constructor function.
//           ex. static keyword , encapsulation , inheritance

/*
class product{
    constructor(name, price)
    {
        this.name=name;
        this.price=price;
    }
    displayProduct()
    {
        console.log(`${this.name}`);
        console.log(`${this.price}`);
    }
        
    }
const p1=new product("mrf", "18k");
p1.displayProduct();



/////////////////////---------example-2-----------------////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

class student_detail
{
    constructor(name, age, faculty, level,grade, remark)
    {
        this.name=name;
        this.age=age;
        this.faculty=faculty;
        this.level=level;
        this.remark=remark;
        this.grade=grade;
    }
    display_std_details()
    {
        console.log(`${this.name}, ${this.age}, ${this.faculty}, ${this.level}`);
        return this;
    }
    display_result()
    {
        console.log(this.grade,this.remark,);
        return this;
    }

}

const std1=new student_detail("preyas", 19, "bei", "bachelor_of_engineering");

std1.display_std_details();


//method chaining 
const std2= new student_detail("vengeance", 19, "batman","grandmaster", "A-", "pass");
std2.display_std_details().display_result();  //method chaining 
// in order to use method chaining, you should return "this" from the function.In method chaining, 
// returning "this" is crucial because it allows you to continue calling other methods on the 
// same object instance. When a method returns "this", it effectively returns the current object, 
// enabling subsequent method calls in a chain.

*/