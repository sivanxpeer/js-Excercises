// 1. Fill an array with 100 of a same object using array fill method.

let someObject = {
    "name": "sivan",
    "age": 29
};

let objectsArray = new Array(100).fill(someObject);
// objectsArray.fill(someObject, 0, 100);

//test
console.log(objectsArray.length);
console.log(objectsArray[99]);
console.log("----------------");


//2. Create an array with numbers ranging from 1-100 using the Array.from method.
console.log(Array.from({ length: 100 }, (_, i) => i + 1));
console.log("----------------");


//3. Convert only values of an object into one array.
let someObject1 = {
    "a": 1,
    "b": 2,
    "c": 3,
    "d": 4,
    "e": 5
};


var array = Object.keys(someObject1)
    .map(function (key) {
        return someObject1[key];
    });

console.log(array);
console.log("----------------");


// 4. Convert an array into one object
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let obj = (Object.assign({}, arr));
console.log(obj);
console.log(typeof (Object.assign({}, arr)));
console.log("----------------");


// 5. Find out if an array is an array.
console.log(Array.isArray(arr));
console.log(Array.isArray(obj));
console.log("----------------");

//  Copy an array.
// • Create a copy of an array that won’t effect the original array if modified.
let arrayToCopy = [1, 2, 3, 4, 5, 6];
let deepCopy = Array.from(arrayToCopy);
deepCopy[0] = 0;
console.log(arrayToCopy);
console.log(deepCopy);
console.log("----------------");

// • Create a copy of an array that will effect the original array if modified.
let arrayToCopy2 = [1, 2, 3, 4, 5, 6];
let shallowCopy = arrayToCopy2.slice();

console.log(arrayToCopy2);
console.log(shallowCopy);
