const people = ["Greg", "Mary", "Devon", "James"];


// 1. Using a loop, iterate through this array and console.log all of the people.
function printPeople(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
printPeople(people);
console.log("----------------------------");

// 2. Write the command to remove "Greg" from the array.
people.reverse().pop(0);
people.reverse();
printPeople(people);
console.log("----------------------------");


// 3. Write the command to remove "James" from the array.
people.pop(0);
people.reverse();
printPeople(people);
console.log("----------------------------");


// 4. Write the command to add "Matt" to the front of the array.
people.reverse().push("Matt");
people.reverse();
printPeople(people);
console.log("----------------------------");


// 5. Write the command to add your name to the end of the array.
people.push("Sivan");
printPeople(people);
console.log("----------------------------");


// 6. Using a loop, iterate through this array and after console.log-ing "Mary", exit from the loop.
for(let i=0; i<people.length;i++){
    console.log(people[i]);
    if(people[i]=="Mary")
    break;
}
console.log("----------------------------");


//7. Write the command to make a copy of the array using slice. The copy should NOT include "Mary" or "Matt".
peopleCopy = people.slice().filter(function(person){
    return person.indexOf("M") !==0;
});
console.log(peopleCopy);
console.log("----------------------------");


// 8. Write the command that gives the indexOf where "Mary" is located.
console.log(people.indexOf("Mary"));
console.log("----------------------------");

// 9. Write the command that gives the indexOf where "Foo" is located (this should return -1).
console.log(people.indexOf("Foo"));
console.log("----------------------------");


// 10. Redefine the people variable with the value you started with. 
// Using the splice command, remove "Devon" from the array and add "Elizabeth" and "Artie". 
// Your array should look like this when you are done ["Greg", "Mary", "Elizabeth", "Artie", "James"].
people.splice(0,people.length,"Greg", "Mary", "Devon", "James");
people.splice(2,1,"Elizabeth","Artie");
console.log(people);
console.log("----------------------------");


// 11. Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob"
let withBob = people + "boo";

console.log(withBob);