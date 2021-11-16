const candyStore = {
    candies: [
        {
            name: "mint gum",
            id: "as12f",
            price: 2,
            amount: 2
        },
        {
            name: "twix",
            id: "5hd7y",
            price: 5,
            amount: 4
        },
    ],
    cashRegister: 200
}

function getCandy(candyStore, id) {
    return candyStore.candies.find((candy)=>candy.id==id)
}

console.log(getCandy(candyStore, "5hd7y"));

function getPrice(candyStore, id){
    return getCandy(candyStore,id).price;
}
console.log(getPrice(candyStore, "5hd7y"));

function addCandy(candyStore, id, name, price){
    const obj ={};
    obj.name=name;
    obj.id=id;
    obj.price=price;
    obj.amount=1;
    candyStore.candies.push(obj);
}
addCandy(candyStore,"ds3sd","yami",8);
console.log(getCandy(candyStore,"ds3sd"));
console.log(candyStore);


function buy(candyStore, id){
    candyStore.cashRegister+=getPrice(candyStore,id);
    getCandy(candyStore,id).amount--;
}

buy(candyStore, "as12f");
console.log(candyStore);