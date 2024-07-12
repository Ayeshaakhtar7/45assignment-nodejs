// 42. Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
// Define the array of magicians
let magicians: string[] = ["James", "Albert Einstein" , "David"];

// // Function to add "the Great" to each magician's name


// // Function to display the magicians' names
function show_magicians(magicians: string[]) {
  magicians.forEach(magician => {
      console.log(magician);
  });
 }
/// Function to add "the Great" to each magician's name
function make_great(magicians: string[]) {
  for (let i = 0; i < magicians.length; i++) {
      magicians[i] = magicians[i] + " the Great";
  }
}

make_great(magicians); // Modifies the original array
show_magicians(magicians); // Shows modified names