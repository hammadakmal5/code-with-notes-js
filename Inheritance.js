

// Inheritance : Transfering the properties and function from parent to child


class Parent {
    constructor(skinColor, eyeColor, nationality, bloodType) {
        this.skinColor = skinColor;
        this.eyeColor = eyeColor;
        this.nationality = nationality;
        this.bloodType = bloodType;
    }
    getFood(foodName) {
       console.log("Get the food with the name of: ", foodName)
    }
}

class Child extends Parent {
    constructor(skinColor, eyeColor, nationality, bloodType, techKnowledge, sports) {
        super(skinColor, eyeColor, nationality, bloodType);
        this.techKnowledge = techKnowledge;
        this.sports = sports;  
    }
     
    Jump () {
        console.log("Wow You can Jump High...........");
    }
}


let parent1 = new Parent("brown", "dark", "Africa", "O negative");

console.log("Parent skinColor: ", parent1.skinColor);
console.log("Parent eyeColor: ", parent1.eyeColor);
console.log("Parent nationality: ", parent1.nationality);
console.log("Parent bloodtype: ", parent1.bloodType);

parent1.getFood("Chinese Food")

console.log("----------------------------------------");
// let's create an obj of the child class

let child1 = new Child("white", "dark brown", "Africa", "A negative", "Programming/coding", "football");
console.log("Child skinColor: ", child1.skinColor);
console.log("Child eyeColor: ", child1.eyeColor);
console.log("Child nationality: ", child1.nationality);
console.log("Child bloodtype: ", child1.bloodType);
console.log("Child techSkills: ", child1.techKnowledge);
console.log("Child sports: ", child1.sports);


child1.Jump();

child1.getFood("Biryani");