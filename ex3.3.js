const worldPopulation = 7900;
const chinaPopulation = 1441;
const israelPopulation = 9.217; //million
const germanyPopulation = 83.24;

function percentageOfWorld1(population){
    return (population/worldPopulation)*100;
}

let percentageOfWorld2 = population=> (population/worldPopulation)*100;


let china = percentageOfWorld1(chinaPopulation);
console.log(china);
let israel = percentageOfWorld1(israelPopulation);
console.log(israel);
let germany = percentageOfWorld1(germanyPopulation);
console.log(germany);

console.log(percentageOfWorld2(chinaPopulation));
console.log(percentageOfWorld2(israelPopulation));
console.log(percentageOfWorld2(germanyPopulation));


// let  = percentageOfWorld1(1441);

