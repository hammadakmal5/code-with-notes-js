


/**
 * Array --- is a special variable that can contain multiple values inside it
 * 
 */

// [] square brackets , {} curly brackets , braces , () parenthesis

const fruits = ["apples", "banana", "oranges", "kiwi", "grapes"];


// accesssing the values inside the array by using index position


let secondFruit = fruits[1];
let fourthFruit =  fruits[3];


// changing the values 
fruits[2] = "Watermelon";
fruits[4] = "cherry";


// length of the array
// console.log(fruits.length);


// looping the arrays
for (let i = 0; i < fruits.length; i++) {
    console.log(i, " ", fruits[i]);
}


console.log("----------------------------------------");

// Editing Arrays --- Arrays have methods or built in functions that can be used to edit the arrays

// push method is used to add the element at the end
fruits.push("mangoes", "pears");

// pop method is used to remove the element at the end
fruits.pop();
fruits.pop();

// unshift method is used to add the element at the start
fruits.unshift("pineapple", "papaya");

// shift method is used to remove the element at the start
fruits.shift();
fruits.shift();
// console.log(fruits);

// slice method create a shallow copy of the array. It takes two arguments i.e starting index , ending index (ending index will not include what is copied)
const favorFruits = fruits.slice(0, 3);

// console.log(favorFruits);

// splice method doest not create the shallow copy, it takes three arguments i.e starting index , how many elements you want to remove , any element to replace at that index

fruits.splice(2, 2, "Olive", "pomegranate");
fruits.splice(2, 2);

console.log(fruits);



/**
 *                    Thank you 
 */



