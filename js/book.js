const libraryShelf = document.querySelector('.library');

let myLibrary = [];
initializeLibrary();

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function() {
    return `${title} by ${author}, ${pages} pages, ${read ? "read" : "not read yet"}`;
}

function initializeLibrary() {
    let a = new Book("Divided", "Brian Cornell", 326, "Read");
    let b = new Book("Thirst: 2600 Miles to Home", "Heather Anderson,", 208, "Read");
    let c = new Book("Free Outside: A Trek Against Time and Distance", "Jeff Garmire", 264, "Read");
    let d = new Book("The Pursuit of Endurance: Harnessing the Record-Breaking Power of Strength and Resilience", "Jennifer Pharr Davis", 320, "Not Read");
    myLibrary.push(a,b,c,d);
    render();
}

function addBookToLibrary() {
    let title = document.querySelector('#book-info #book-title').value;
    let author = document.querySelector('#book-info #book-author').value;
    let pages = document.querySelector('#book-info #book-pages').value;
    let read = document.querySelector('#book-info #book-read').checked;  
    
    let book = new Book(title, author, pages, read ? "Read" : "Not Read");
    myLibrary.push(book)
}

function render() {
    myLibrary.forEach(displayBook);
}

function displayBook(book) {
    let bookDiv = document.createElement("div");
    bookDiv.setAttribute('class', 'book');
    libraryShelf.appendChild(bookDiv);

    for (let item in book) {
        let span = document.createElement("span");
        span.setAttribute('class', item);
        span.textContent = book[item];
        if (item === "pages") {
            span.textContent += ' pages';
        }
        bookDiv.appendChild(span);
    }
}