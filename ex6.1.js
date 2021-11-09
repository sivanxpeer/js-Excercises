const arr = [1,7,3,0,-5,7,3,9]; 

for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}


function arrayLength(numbersArray){
    let i;
    for(i=0; numbersArray[i]!=null; i++);
    return i;
}

function arraySum(numbersArray){
    let sum =0;
    for(let i=0;i<arrayLength(numbersArray);i++){
        sum+= numbersArray[i];
    }
    return sum;
}

function arrayMulti(numbersArray){
    let product = 1;
    for(let i=0; i<numbersArray.length;i++){
        product*=numbersArray[i];
    }
    return product;
}


//test
console.log("array length : "+ arrayLength(arr));
console.log("sum: "+ arraySum(arr));
console.log("product: "+ arrayMulti(arr));