



// return statement :  If a function is returning you a value make sure to create a variable when you call the function 

// function Declaration
// function calculateTotal (item1, item2) {
//     return item1 + item2;
// }


// Function Expression
// const calculateTotal = function (item1, item2) {
//     return item1 + item2;
// }

// arrow function
const calculateTotal = (item1, item2) => {
    return item1 + item2;
}


let total = calculateTotal(5.6, 4.4); // arguments

// let total2 = calculateTotal(45, 68);

console.log(total);