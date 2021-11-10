// 1. create 2 book objects with properties: name, author, year.
const book1 = {
    name: "Blue blue",
    author: "best Author",
    year: 1998,
};

const book2 = {
    name: "Red red",
    author: "A.B.C",
    year: 2021,
};


// 2. create an empty object bookUtils (utils = short for utilities).
let bookUtils = {};

// 3. add to to the bookUtils object a function getFirstPublished, that recieves 2
// books and returns the book with the smaller year.
bookUtils.getFirstPublished = function (bookOne, bookTwo) { return bookOne.year > bookTwo.year ? bookTwo : bookOne };

//test
console.log(bookUtils.getFirstPublished(book1, book2));

// 4. add to to the bookUtils object a function setNewEdition, that recieves a
// book and an edition year and sets a new property latestEdition with the
// edition year, or updates an existing one.

bookUtils.setNewEdition = function (book, editionYear) {
    book.edition = editionYear;
}

//test
bookUtils.setNewEdition(book1, 2012);
console.log(book1);

// 5. add to to the bookUtils object a setLanguage function, that recieves a book
// and a language and sets a new property language with the languahe, or
// updates an existing one.

bookUtils.setLanguage = function (book, language) {
    book.language = language;
}

//test
bookUtils.setLanguage(book1, "Hebrew");
console.log(book1);
//overriding:
bookUtils.setLanguage(book1, "Italian");
console.log(book1);

// 6. add to to the bookUtils object a setTranslation function, that recieves a
// book a language and a translator, and sets a new property of translation,
// which is an object that contains the translator and the language.
bookUtils.setTranslation = function (book, language, translator) {
    book.translation = { 
        language: language,
        translator: translator
    };
}

// test:
bookUtils.setTranslation(book1, "russian", "tzvika levi");
console.log(book1);


// 7. add to to the bookUtils object a setPublisher function, that recieves a book
// a name and a location, and sets a new property named publisher, which is an
// object that contains the name and location.

bookUtils.setPublisher = function (book, name, location) {
    book.moreInfo = {
        name: name,
        location: location
    };
}

//test:
bookUtils.setPublisher(book1, "Sivan", "England");
bookUtils.setPublisher(book2, "Sivan", "England");
console.log(book1);
console.log(book2);


// 8. add to to the bookUtils object a function isSamePublisher, that recieves 2
// books and checks if the publisher name and location are identical in the 2
// books.

bookUtils.isSamePublisher = function (book1, book2) {
    if (book1.moreInfo.name == book2.moreInfo.name) {
        if (book1.moreInfo.location == book2.moreInfo.location) {
            return true;
        }
    }
    else return false;
}


console.log(bookUtils.isSamePublisher(book1,book2));
