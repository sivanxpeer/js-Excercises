const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives","Hamburgers"];

function compareArrays(array1,array2){
    let result = [];
    for(let i=0; i<array1.length;i++){
        for(let j=0;j<array2.length;j++){
            if(array1[i]===array2[j])
            result.push(array1[i]);
        }
    }
    return result;
}


console.log(compareArrays(food,food1));