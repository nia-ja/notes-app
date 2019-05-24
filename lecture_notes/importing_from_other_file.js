// IMPORTing variables
const name = require('./exporting_vars_funcs_etc.js'); // will run first -> first output in console
console.log(name); // second output in console


// IMPORTing functions
const add = require('./exporting_vars_funcs_etc.js');
const sum = add(4, -2);
console.log(sum);