
// if - else function
function validatePassword1(password) {
    if (password.length > 7)
        return "Strong";
    else return "Weak";
}

//  ternary conditional expression
// condition ? exIfTrue: exIfFalse
function validatePassword2(password) {
    return password.length > 7 ? 'Strong' : 'Weak';
}


// function that uses a && logical operator.
function validatePassword3(password) {
    return password.length > 7 && "strong" || "Weak";
}

function validatePassword4(password) {
    return password.length>7 && password.search(/[A-Z]/) >=1 ?  "Very Strong" : password.length>7 ? "Strong" : "Weak";
}




//tests:
console.log("1 " + validatePassword1("01234567"));
console.log("2 " + validatePassword2("000"));
console.log("3 " + validatePassword3("000"));
console.log("3 " + validatePassword3("jcksdnfsdfh"));
console.log("3 " + validatePassword3("00Assjkd000f0"));
console.log("4 " + validatePassword4("aaa123456SS7"));