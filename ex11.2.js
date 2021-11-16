
const arrayNums = [1, 2, 3, 4, 5];
const arrayStringsAndNums = [9, "Hello", 1, 3, 4, " hi", 6, 7, "hide"];

function doubleValues(array) {
    const double = array.map(function (num) { return 2 * num; })
    return double;
}

console.log(doubleValues(arrayNums));

function onlyEvenValues(array) {
    const res = [];
    array.forEach(function (num) { if (num % 2 == 0) res.push(num); })
    return res;
}
console.log(onlyEvenValues(arrayNums));

function showFirstAndLast(array) {
    const res = [];
    array.forEach(function (element, index) {
        if (typeof (element) === typeof (" "))
            if (index === 0 || index === array.length - 1)
                res.push(element);
    })
    return res;
}
console.log(showFirstAndLast(arrayStringsAndNums));


const vowelCount = (string) => {
    const obj = {};
    const vowels = ["a", "e", "i", "o", "u"];
    const arr = Array(string);
    vowels.forEach((vowel) => {
        arr.forEach((word) => {
            for (let i = 0; i < word.length; i++) {
                if (word[i] == vowel) {
                    if (obj[word[i]]) {
                        obj[word[i]] += 1;
                    }
                    else obj[word[i]] = 1;
                }
            }
        })
    })
    return obj;
}

console.log(vowelCount("hello whats up hi hi hello "));

const capitalize = (string) => {
    const res = [];
    const arr = Array(string);
    arr.map((word) => {
        res.push(word.toUpperCase());
    })
    return res;
}

console.log(capitalize("hi how are you"));


const shiftLetters = (string) => {
    const res = [];
    let str = "";
    const arr = Array(string);
    console.log(arr);
    arr.forEach((letter, i) => {
       let code = letter.charCodeAt(i) - 1;
       res.push(String.fromCharCode(code));
    })
    return res;
}

console.log(shiftLetters("bcd"));