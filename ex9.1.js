const listOfNeighbours = [
    ["Canada", "Mexico"],
    ["Spain"],
    ["Norway", "Sweden", "Russia"],
   ];


   for(let neighbours of listOfNeighbours){
       for(let neighbour of neighbours){
           console.log("Neighbour: "+ neighbour);
       }
   }
   