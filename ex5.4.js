function whatColor(color){
    switch(color){
        case "yellow": case "pink": case "orange":
            return "light color"; 
        case "blue": case "purple": case "brown":
            return "dark color";
        default:
            return "Unknown color";
    }
}


//tests:
console.log(whatColor("yellow"));
console.log(whatColor("brown"));
console.log(whatColor("black"));
console.log(whatColor("pink"));
console.log(whatColor("blue"));
console.log(whatColor("orange"));
console.log(whatColor("white"));