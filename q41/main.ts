// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.


function show_magicians(magicians: string[]) {
    magicians.forEach(magician => {
        console.log(magician);
    });
  }
  // Create an array of magician names
  const magicians: string[] = ["James", "Cheema", "Albert Einstein", "David"];
  
  show_magicians(magicians);