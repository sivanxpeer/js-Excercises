const johnScores= [89,120,103];
const mikeScores = [116,94,123];
const maryScores = [97,134,105];
const team1Name = "John's team";
const team2Name = "Mike's team";
const team3Name = "Mary's team";
let teamsScores = [["John's team",89,120,103],["Mike's team",116,94,123]];
// ,maryScores];

let teamJohn = {
    scores: [89,120,103],
    name: "John's team"
};

let teamMike = {
    scores: [116,94,123],
    name: "John's team"
};


function calculateAverage(scoresArry){
    let sum =0;
    for (let i=0; i<scoresArry.length;i++){
        sum+=scoresArry[i];
    }
    return sum/scoresArry.length;
}


// 1) Calculate the average score for each team 
for (let i=0; i< teamsScores.length;i++){
    console.log(calculateAverage(teamsScores[i]));
}
console.log(calculateAverage(teamsScores));

// 2) Decide which teams wins in average (highest average score), and print the
// winner to the console. Also include the average score in the output.


// 3) Then change the scores to show different winners. Don't forget to take into
// account there might be a draw (the same average score)

