

function isString(aString, callback) {
    if (typeof (aString) === typeof (" ")) {
        callback(aString);
    }
    else console.log("not a string");
}


function printStringFunc(string) {
    console.log(string);
}


function firstWordUpperCase(aString, func) {
    const arr = aString.split(" ");
    let first = arr[0].toUpperCase();
    for (let i = 1; i < arr.length; i++) {
        first += " " + arr[i];
    }
    return func(first);
}

function createDashes(sentence) {
    result = "";
    for (let i = 0; i < sentence.length; i++) {
        if (sentence.charAt(i) == " ") {
            result += "-";
        }
        else
            result += sentence[i];
    }

    return result.toString();
}

function lastWordUpperCase(aString) {
    const arr = aString.split(" ");
    let word = "";
    let last = arr[arr.length - 1].toUpperCase();
    for (let i = 0; i < arr.length - 1; i++) {
        word += arr[i] + " ";
    }
    word += last;
    return word;
}

function add(num1, num2) {
    return num1 + num2
}
function multy(num1, num2, add) {
    let sum = num1 * num2
    return add(sum, num1)
}
console.log(multy(1, 2, add))



//tests:
isString("Sivan", printStringFunc);
isString(444);
console.log("-------------------------------------")

console.log(firstWordUpperCase("hello I love you wont you tell me your name?", createDashes));
console.log(firstWordUpperCase("hello I love you wont you tell me your name?", lastWordUpperCase));
