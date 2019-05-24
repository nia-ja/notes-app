// Test if file is connected
// console.log('utils.js');

// EXPORTing variables
const name = "Kasia";
module.exports = name; // exporting variable, so we can use it in othe module where utils.js is required

// EXPORTing functions
const add = function (a, b) {
    return a + b;
}

module.exports = add;