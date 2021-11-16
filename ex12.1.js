var library = [
    {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true
    },
    {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true
    },
    {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false
    }
    ];

    const displayBooks=(booksLibrary)=>{
        booksLibrary.forEach((book)=>{
            if(book.readingStatus){
                console.log(book);
            }
        })
    }

    displayBooks(library);

    