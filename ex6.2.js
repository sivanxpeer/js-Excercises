const people = ["Greg", "Mary", "Devon", "James"];


//print people
function printPeople(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

printPeople(people);
console.log("----------------------------");

//remove greg
people.reverse().pop(0);
people.reverse();

//test
printPeople(people);
console.log("----------------------------");

//remove James
people.pop(0);
people.reverse();

//test
printPeople(people);
console.log("----------------------------");

//add matt to front
people.reverse().push("Matt");
people.reverse();

//test
printPeople(people);
console.log("----------------------------");


// //add my name to end 
people.push("Sivan");

//test
printPeople(people);
console.log("----------------------------");
