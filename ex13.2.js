const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];

foods.sort();
console.log(foods);
foods.reverse();
console.log(foods);

const foodsWithUpperCase = [
    "falafel",
    "Sabich",
    "hummus",
    "pizza with extra pineapple",
];

const lowerCaseFoods = (foods)=>{
    return foods.map((word)=>word.toLowerCase()).sort();
}
console.log(lowerCaseFoods(foodsWithUpperCase));
const dec = lowerCaseFoods(foods).sort().reverse();
console.log(dec);

const words = ["apple", "supercalifragilisticexpialidocious",
"hi", "zoo"];

console.log(words.sort((a,b)=>b.length-a.length));