

const desiredLanguage = "English";
const desiredPopulation = 50; //50 million
const isDesiredIsland = false;
const desiredCounty = "Finland";

function countryToLiveIn(language, isIsland, population, country) {
    if(language == desiredLanguage && isIsland==isDesiredIsland && population<=desiredPopulation){
        console.log(`You should live in ${country}`)       
    }
    else{
        console.log(`${country} does not meet your criteria.`)       
    }
}

//tests:
countryToLiveIn("English",false , 50, "USA");
countryToLiveIn("Hebrew",false , 50, "Israel");
countryToLiveIn("English",true , 50, "Germany");
countryToLiveIn("English",false , 80, "Korea");
countryToLiveIn("English",false , 30, "Here");