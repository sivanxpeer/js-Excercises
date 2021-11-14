let populations = ["83", "9", "25", "125"];
const worldPopulation = 7900; //million
//germany ~83 million 
// israel ~9 million 
// australia ~25 million 
// japan ~125 million

let percentageOfWorld2 = population => (population / worldPopulation) * 100;

function populationPercentages(populationArray) {
    let percentages = [];
    let i = 0;
    while (populationArray[i]) {
        percentages.push(percentageOfWorld2(populationArray[i]));
        ++i;
    }
    return percentages;
}

console.log(populationPercentages(populations));
