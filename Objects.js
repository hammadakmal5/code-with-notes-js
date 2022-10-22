

// object --- is something that has the properties and functions(action). In Js , objects are key value pair.


const person = {
    id: 121,
    name: "kay",
    age: 22,
    country: "UK"
};


const animal = {
    name: "dog",
    age: 5
}


// access the properties by dot notation
// console.log(person.name);
// console.log(person.id);

// access the properties by square brackets method
// console.log(person['age']);
// console.log(person['country']);


// Saving values to a variable
let firstname = person.name;
let id = person.id;
// console.log("Firstname: ",firstname);
// console.log("Id: ", id);

// add a new property in an object
person.city = "London";

// by square brackets
person['height'] = "195cm";




// Accessing values using destructuring syntax(Important)

let {name, age, country} = person;

// Renaming by destructuring syntax
let {name: dogname, age:dogage}  = animal;


// console.log(name, age, country);

// console.log("------------------------------------");
// console.log(dogname);
// console.log(dogage);


// deleting the property 
// delete person.id;

// delete person['country'];



// looping over the object properties
//  for in loop for objects

for (let property in person) {
    console.log(`${property}:  ${person[property]}`);
}

