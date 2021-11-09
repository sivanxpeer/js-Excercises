let numSiblings = prompt('How many siblings do you have?');
if (parseInt(numSiblings) === 1){
    console.log('1 sibling!' );
}
else if(numSiblings>1){
    console.log('More than 1 sibling');
}
else{
    console.log('No siblings');
}


//tests:

// ==  checked with : 4 --> more than 1 
//               1 --> 1 sibling
//               0 --> no sibligs

// ===  checked with : 4 --> more than 1 siblings 
//               1 --> no sibling
//               0 --> no sibligs

// ===, type conversion -->  checked with : 4 --> more than 1 siblings 
//               1 --> 1 sibling
//               0 --> no sibligs

// comparing between 2 Number values and not Strings, best practice to use strict equality comparison with type conversion
