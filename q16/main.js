"use strict";
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let guestList = ["Humaira", "Noman", "Luqman", "Sufyan"];
console.log("Hey! I have found a bigger space on my dinner table");
//adding more guests
guestList.unshift("Irfan");
guestList.splice(2, 0, "Bilal");
guestList.push("Ahmed");
guestList.forEach(guestList => {
    console.log(`Dear ${guestList}, would you like to join me for an amazing dinner`);
});
