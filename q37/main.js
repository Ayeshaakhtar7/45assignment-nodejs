"use strict";
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
//for default large size
function make_shirt(size = "large", message = "I love TypeScript") {
    console.log(`You have ordered ${size} sized T-shirt with the message: ${message}`);
}
make_shirt();
//for default medium size
make_shirt("Medium");
//for customised shirt
make_shirt("Small", "I love Coding");
