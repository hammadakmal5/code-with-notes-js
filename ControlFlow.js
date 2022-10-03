
// synchronous means execute statements line by line
// console.log("line 1")
// console.log("line 2")
// console.log("line 3")


// control Flow statements control the flow of the program

/**
 * There are following control flow statement
 * 
 * 1. if statement --- we use if statement for one condition
 * 
 * 2. if else statement --- we use if else statement for two conditions
 * 
 * 3. if else if statement --- we use if else if statement for more than two condition
 * 
 * 4. switch statement --- Is used for the list of the cases
 */


// demo

// Students will get A grade if they score greater or equal to 90. 
// Students will get B grade if they score greter or equal to 80 to 89.
// Student will get C grade if they score in between 70 to 79.
//  And less than that they will be fail.

// let score = 55;

// if (score >= 90) {
//     // code here executes only if the condition is true otherwise it will be ignore
//     console.log("A grade");

// }

// else if (score >= 80 && score <= 89) {
//     console.log("B grade");
// }

// else if (score >= 70 && score <= 79) {
//     console.log("C grade");
// }
// else {
//     console.log("F grade");
// }


// Month name according to the number

let month = 2;

switch (month) {
    case 1: console.log("January"); break;
    case 2: console.log("Feb"); break;
    case 3: console.log("March"); break;
    case 4: console.log("April"); break;
    case 5: console.log("May"); break;
    case 6: console.log("June"); break;
    case 7: console.log("July"); break;
    case 8: console.log("August"); break;
    case 9: console.log("September"); break;
    case 10: console.log("October"); break;
    case 11: console.log("November"); break;
    case 12: console.log("December"); break; 
    default: console.log("invalid number"); 
}