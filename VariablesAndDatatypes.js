


// Datatypes --- What type of data you can use in JavaScript
/**
 * There are seven Datatypes
 * 1. String --- is a sequence of characters, numbers, and special character (@, $, %) etc. Note: String value should be in double or single quotes
 * 2. Number: can be whole number (integer) and decimal or float (1.84, 23.76)
 * 3. Boolean --- Two values only i. true(yes) ii. false(no) 
 * 4. null --- nothing / empty
 * 5. undefined --- Undefined is a data type itself, and occurs when a variable is declared but not given a value
 * 6. Array --- is a special variable that can store multiple values (later)
 * 7. Object --- means key-value pair. (later) */ 


/**
 * Variables --- are used to store the values. You can access the variable by name. You can also change the value inside the variable.
 * There are three ways to create a variable in JavaScript  
 * You can create the variable with var , let and const .
 */

/**
 * Rules for naming the variable
 * 1. First character of the variable name should be an Alphabet
 * 2. Spaces are not allowed between the variable name
 * 3. No keyword can be used as a variable name
 */

// -----------------------------------------------------------------

// Demo

/**
 * var ---- variables created with the var keyword can be redeclare(creating a variable with the same name again) and value can be changed
 */

// Use lowerCamelCase technique for variable names 

// You can declare(create) and initialize the variable on the name
var busName = "Clifton";    // String Datatype

// change the variable value
busName = "GreenStreet";

// redeclare a variable with var

// var busName = "Reddit";

// There is a second way too , first you declare then you initialize in a new line
var passenger;       // declare   
passenger = 29;      // initialize // Number Datatype

var isComfortable = true;    // Boolean Datatype 

var vacantSeats =  null;    // null Datatype means nothing 

var stopPoints;              // undefined



console.log(busName);
console.log(passenger);
console.log(isComfortable);
console.log(vacantSeats);
console.log(stopPoints);

console.log("--------------------------------------------------");

/**
 * let --- let keyword not allow you to redeclare a variable and value can be changed with the let keyword
 */

let sentence =  "Don't you ever come around here"; 
// reassigning or changing the value
sentence = "You better run, you better do what you can";

// let's try to redeclare a variable with the same name again

// let sentence = "I am a new Sentence";  //SyntaxError: Identifier 'sentence' has already been declared

let pages =  5;
let isExpensive = false;

console.log(sentence);
console.log(pages);
console.log(isExpensive);

console.log("------------------------------------------------");

/**
 * const --- variable that declare with const cannot be changed
 */

const depositMoney = 20000;
// try to change this 
// depositMoney = 50000;    TypeError: Assignment to constant variable.

console.log(depositMoney);