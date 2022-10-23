


// OOP --- Object Oriented Programming


// Important Concepts in OOP:

// class , objects, Encapsulation , Inheritance , Abstraction , polymorphism etc


// What is class --- it's a blueprint to create objects

// constructor is a function that is used to assign the values to an object
class Human {

    constructor(name, age, height) {
        // this is a keyword that will point to the current object
        this.name =  name;
        this.age = age;
        this.height = height;
    }

    eat(food) {
        console.log(`${this.name} can eat. My favorite food is ${food}`);
    }
    sleep() {
        console.log(`${this.name} can sleep` );
    }
    dance() {
        console.log(`${this.name} can dance`);
    }

}


// Creating an object

// new keyword will create a new object
let kay =  new Human("kay", 24, 6.2);
console.log("Name : ", kay.name);
console.log("Age: ", kay.age);
console.log("Height: ", kay.height);
console.log("--------------Functions------------");

kay.eat("Chinese");
kay.sleep();
kay.dance();

console.log("----------------------------------------------------------------")

// create another object
let hammad = new Human ("Hammad", 22, 6.0);
console.log("Name : ", hammad.name);
console.log("Age: ", hammad.age);
console.log("Height: ", hammad.height);
console.log("--------------Functions------------");

hammad.eat("Biryani");
hammad.sleep();
hammad.dance();



// ------------------------------- Task -------------------------

// Creat a class of animals and create at least 10 objects of that class 