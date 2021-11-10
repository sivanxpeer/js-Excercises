// 1. Create an object that represents a book. It should have 4-5 properties that make sense for a book to have.
// 2. Then write a function that has one argument, a book, that will return the following description from your book object:
// `The book <book name> was written by <author name> in
// the year <publishing year`

const book = {
    title: "Oh, the Places You'll Go!",
    author: "Dr. Seuss",
    year: 1990,
    originLanguage: "English",
    genre: "children's literature",
};

function bookDetails(book) {
    return `The book "${book.title}" was written by ${book.author} in the year ${book.year}`;
}

console.log(bookDetails(book));