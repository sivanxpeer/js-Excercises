
// // From function declarations to function expressions

// solution: 
// 1)
let welcome = function(message){return console.log(message);}
// let welcome = message=> console.log(message);

// 2)
let power= function(a){return Math.pow(a,2);}
// let power= a => Math.pow(a,2);

//3)
let add = function (a,b=5){return a+b;}
// let add= (a,b=5) => a+b;



// From function expressions to function declarations

//solutions: 
//1)
function hello(){
    return "Hello!";
}

//2)
function squareRoot(a){ 
    return Math.sqrt(a);
}

//3)
function randomNumbers(a,b){
    return Math.random()*(a-b)+b;
}

//tests:
welcome("Welcome to Appleseeds bootcamp!");
console.log(add(3));
console.log(power(3));
console.log(hello());
console.log(squareRoot(4));
console.log(randomNumbers(4,2));