"use strict";
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function orderSandwich(...items) {
    if (items.length === 0) {
        console.log("You haven't selected any items for your sandwich.");
        return;
    }
    else {
        console.log("Your sandwich includes:");
        for (const item of items) {
            console.log(`- ${item}`);
        }
    }
}
// Call the function with different numbers of arguments
orderSandwich("Turkey", "Lettuce", "Tomato", "Mayo");
orderSandwich("Ham", "Cheese");
orderSandwich("Peanut Butter", "Jelly", "Banana");
