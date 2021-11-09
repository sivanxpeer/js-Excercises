let populations = ["83", "9", "25", "125"];
const worldPopulation = 7900; //million
//germany ~83 million 
// israel ~9 million 
// australia ~25 million 
// japan ~125 million

let percentageOfWorld2 = population=> (population/worldPopulation)*100;

function populationPercentages(populationArray) {
    let percentages = [];
    for(let i=0; i<populationArray.length;i++){
        percentages.push(percentageOfWorld2(populationArray[i]));
    }
    return percentages;
}

console.log( populationPercentages(populations));
