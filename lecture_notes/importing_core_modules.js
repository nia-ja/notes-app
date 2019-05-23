const fs = require('fs'); // importing node.js core module (will work for all of them)

// create a file (first argument is a file_name) and add content to it (second argument is a content we want to add)
// it is also an async version of the module (fs.writeFile)
// if the file already exist - this will overwrite the content
fs.writeFileSync('notes.txt', 'My name is Kasia!');

// add content to file (arguments: file_name, content)
// it is also an async version of the module (fs.appendFile)
// if the file already exist - this will NOT overrite it, just will add provided content
// will create the file if it doesn't yet exist
fs.appendFileSync('notes.txt', ' And what is your name?');