const data = [
    {
        name: "John",
        birthday: "1-1-1995",
        favoriteFoods: {
            meats: ["hamburgers", "sausages"],
            fish: ["salmon", "pike"],
        },
    },
    {
        name: "Mark",
        birthday: "10-5-1980",
        favoriteFoods: {
            meats: ["hamburgers", "steak", "lamb"],
            fish: ["tuna", "salmon", "barracuda"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["ham", "chicken"],
            fish: ["pike"],
        },
    },
    {
        name: "Thomas",
        birthday: "1-10-1990",
        favoriteFoods: {
            meats: ["bird", "rooster"],
            fish: ["salmon"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["hamburgers", "lamb"],
            fish: ["anchovies", "tuna"],
        },
    },
];



const getNames=(db)=>{
    const names=[];
    db.forEach(function(person){
        names.push(person.name);
    })
    return names;
}

console.log(getNames(data));

const getBornBefore=(db,year)=>{
    const people=[];
    db.forEach(function(person){
        if(parseInt(person.birthday.slice(4,person.birthday.length))<=year){
            people.push(person);  
        }
    })
    return people;
}

console.log(getBornBefore(data,1990));

const getFoods=(db)=>{
    const obj = {};
    db.forEach((person)=> {
        person.favoriteFoods.fish.forEach((fishItem)=>{
            // console.log(fishItem);
                if(obj[fishItem])
                    obj[fishItem]+=1;
                else obj[fishItem]=1;
            })
            person.favoriteFoods.meats.forEach((meatItem)=>{
                if(obj[meatItem])
                    obj[meatItem]+=1;
                else obj[meatItem]=1;
            })
        })
    return obj; 
}

console.log(getFoods(data));
