

function isString(aString, callback) {
    if (typeof(aString) === typeof(" ")) {
        printStringFunc(aString);
    }
    else console.log("not a string");
}


function printStringFunc(string) {
    console.log(string);
}

// isString("Sivan",printStringFunc);
// isString(444);


function firstWordUpperCase(aString, func){
    const arr = aString.split(" ");
    let first = arr[0].toUpperCase();
    for(let i=1;i<arr.length;i++){
        first+=" "+arr[i];
    }
    // console.log(first);
    return func(first);

}

function createDashes(sentence){
    result ="";
    for(let i=0; i<sentence.length;i++)
    {
        if (sentence.charAt(i)==" "){
            result+="-";
        }
        else
        result+=sentence[i];
    }

    return result.toString();
}

console.log(firstWordUpperCase("hello I love you wont you tell me your name?",createDashes));

