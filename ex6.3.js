const arr = ["boo", "doooo", "hoo","ro"];

function calcLength(stringsArray){
    let lengthArray = [];
    for(let i=0; i<stringsArray.length;i++){
        lengthArray[i]=stringsArray[i].length;
    }
    return lengthArray;
}

console.log(calcLength(arr));