

// Parameters are the variables inside the function parenthesis ()

// Function Declaration
// function sayGreeting (name) {
//          // backticks are used to blend the message with the variable 
//         console.log(`Hello ${name}...!`);
// }


// Function Expression
// const sayGreeting = function (name) {
//     // backticks are used to blend the message with the variable 
//     console.log(`Hello ${name}...!`);
// }


// Arrow Function
const sayGreeting = (name, role, salary) => {
    // backticks are used to blend the message with the variable 
    console.log(`Hello ${name}!. Your task for Today is ${role}. You will be paid ${salary}$.`);
}

// Calling the function
sayGreeting("Kay", "debugging", 400);  // arguments are the actual values that you pass when you call the function
sayGreeting("Harry", "testing", 300);
sayGreeting("liz", "web programming",  400);