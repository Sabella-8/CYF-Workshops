// Predict and explain...
// What will happen when this program is run?
// Check your prediction and explanation by running the program.
// Fix anything that needs fixing.

function printSaladRecipe(forPerson) {
    const saladRecipe = {
        "name": "salad",
        "ingredients": ["lettuce", "corn", "carrots", "cucumber"],
        "rating_out_of_10": 8,
        "steps": [
            "Shred the lettuce",
            "Cut the carrots into small pieces",
            "Slice the cucumber",
            "Mix all the vegetables together in a bowl",
        ]
    };

    if (forPerson.eatsMeat) {
        saladRecipe.ingredients.push("chicken");
        saladRecipe.steps.push("Mix in the chicken");
    }

    console.log(`For ${forPerson.name} to make ${saladRecipe.name}:`);
    
    console.log("Get:");
    


    for (const ingredient of saladRecipe.ingredients) {
        
        console.log(` * ${ingredient}`);
        
        return ` * ${ingredient}`;
   
}

    for (const step of saladRecipe.steps) {
        console.log(step);
    }

}

const person1 = {
    "name": "Ola",
    "eatsMeat": true,
};

const person2 = {
    "name": "Steve",
    "eatsMeat": false,
};

printSaladRecipe(person1);
console.log("");
printSaladRecipe(person2);

// printSaladRecipe(person1);
//  For Ola to make salad 
// Get:
//  *lettuce
// * corn 
// *carrots
// *cucumber
// *chicken
// "Shred the lettuce",
// "Cut the carrots into small pieces",
// "Slice the cucumber",
// "Mix all the vegetables together in a bowl"
// "Mix in the chicken"
// printSaladRecipe(person2);
// for Steve to make salad
// Get:
//  *lettuce
// * corn 
// *carrots
// *cucumber
// "Shred the lettuce",
// "Cut the carrots into small pieces",
// "Slice the cucumber",
// "Mix all the vegetables together in a bowl
