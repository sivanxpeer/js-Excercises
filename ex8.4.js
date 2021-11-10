const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

function letterCounter(array) {
    counter = {};
    for (let word of array) {
        for (let j = 0; j < word.length; j++) {
            let letter = word[j].toLowerCase();
            if (letter == " ")
                continue;
            this.counter[letter] > 0 ? this.counter[letter]++ : this.counter[letter] = 1;
        }
    }
    return counter;
}

console.log(letterCounter(array));