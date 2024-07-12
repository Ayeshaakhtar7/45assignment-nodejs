
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personName = 'ayesha';
console.log("Uppercase:", personName.toUpperCase());
console.log("lowercase:", personName.toLowerCase());
//for title case
let firstChar = personName.slice(0, 1).toUpperCase();
let secondChar = personName.slice(1).toLowerCase();
console.log("Titlecase:", firstChar + secondChar);
//another simple method
// console.log(personName.charAt(0).toUpperCase() + personName.slice(1));