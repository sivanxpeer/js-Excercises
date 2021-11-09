
function gradeAssigner(numberScore){
    if(0<=numberScore && numberScore<=64)
        return "F";
    
    else if(65<=numberScore && numberScore<=69)
        return "D";
    
    else if(70<=numberScore && numberScore<=79)
        return "C";
    
    else if(80<=numberScore && numberScore<=89)
        return "B";

    else return "A";
}
//test:
console.log( gradeAssigner(100));