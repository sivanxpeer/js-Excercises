
/*
    JavaScript - Declaring Functions
    The following exercise contains the following subjects:
        * functions
    
    Instructions
        * Please reformat the following function expressions to IIFE functions.
        * Please reformat the following function declarations in two ways, explicit return and implicit return functions.
    Submit the file to Hive
*/

// From function declarations to explicit and implicit return functions (one of each).
function welcome() {
    let welcome = 'Welcome to Appleseeds Bootcamp!';
    return welcome;
}


function power(a) {
    let myNumber = a;
    let result = Math.pow(myNumber, 2);
    return result;
}

// From function expressions to IIFE functions.
const squareRoot = a => Math.sqrt(a);

const randomNumbers = (a, b) => Math.random() * (a - b) + b;

//solutions: 
// From function declarations to explicit and implicit return functions (one of each).

//1)
// explicit:
const welcome1 = message=>{return message;}
// implicit:
const welcome2 = message => message;

// 2)
// explicit:
const power1 = (a)=>{return Math.pow(a,2); }
// implicit:
const power2 = a=>Math.pow(a,2);

// From function expressions to IIFE functions.
// 1)
(function(a){Math.pow(a,2)})();


// tests:
console.log(welcome1("hi"));
console.log(welcome2("hi2"));
console.log(power1("3"));
console.log(power2("4"));
(function(a){Math.pow(a,2)})();

