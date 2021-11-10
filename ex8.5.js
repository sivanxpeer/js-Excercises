function keyValueSwapper(objectToSwap){
    const object ={};
    for(let key in objectToSwap){
        object[objectToSwap[key]]=key;
    }
    return object;
}

// test

const object1 = {
    key1: "value1",
    key2: "value2",
    key3: "value3"
};

const object2 = keyValueSwapper(object1);
console.log(object2);