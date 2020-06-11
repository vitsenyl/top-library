const libraryShelf = document.querySelector('.library');
const newBookForm = document.querySelector('#book-info');
const addBookButton = document.querySelector('#add-book');

let myLibrary = []; // Should use hash table ideally... will learn at some point!
initializeLibrary();

document.querySelector('#submit').onclick = addBookToLibrary;
document.querySelector('#cancel').onclick = cancelAdd;
addBookButton.onclick = displayAddBookForm;
libraryShelf.onclick = removeBook;
libraryShelf.onchange = editReadStatus;

// Callback Functions

function editReadStatus(e) {
    if (e.target.classList.contains("read-status")) {
        let target = e.target.parentElement;
        let nodes = target.parentElement.childNodes;
        let index = Array.prototype.indexOf.call(nodes, target) - 1;

        myLibrary[index].updateReadStatus(e.target.value);
    };
}

function removeBook(e) {
    if (e.target.classList.contains("remove-book")) {
        let target = e.target.parentElement;
 
        myLibrary.splice( myLibrary.findIndex(element => 
            element.title == target.childNodes[0].innerText), 1);
        
        target.remove();
    }
}

function displayAddBookForm() {
    if (newBookForm.classList.contains("hidden")) {
       newBookForm.classList.remove("hidden");
       newBookForm.reset();
    } else {
        newBookForm.classList.add("hidden");
    }
}

function cancelAdd() {
    displayAddBookForm();
}

function addBookToLibrary() {
    let title = document.querySelector('#book-info #book-title').value;
    let author = document.querySelector('#book-info #book-author').value;
    let pages = document.querySelector('#book-info #book-pages').value;
    let read = document.querySelector('#book-info #read-status').value;  

    if (title && author && pages) {
        let book = new Book(title, author, pages, read);
        myLibrary.push(book);
        render();
        newBookForm.reset();
    }
}

// Utility Functions 

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read ? "read" : "not read yet"}`;
    }

    this.updateReadStatus = function(readStatus) {
        this.read = readStatus;
    }
}

function render() {
    libraryShelf.innerHTML = "<h2>Library</h2>";
    myLibrary.forEach(displayBook);
}

function displayBook(book) {
    let bookDiv = document.createElement("div");
    bookDiv.setAttribute('class', 'book');
    bookDiv.innerHTML = `<span class="title">${book.title}</span>
            <span class="author">${book.author}</span>
            <span class="pages">${book.pages} pages</span>
            <select name="read-status" class="read-status">
                ${readSelectorOptions(book.read)}
            </select>
            <img class="remove-book" src="img/criss-cross.svg" alt="Remove Book">`;
    
    libraryShelf.appendChild(bookDiv);
}

function readSelectorOptions(readStatus) {
    let readSelectorString = '';
    for (let s of ['Read', 'Reading', 'Not Read']) {
        readSelectorString += `<option value="${s}"`;
        if (s == readStatus) {readSelectorString += ' selected'};
        readSelectorString += `>${s}</option><br>`;
    }
    return readSelectorString;
}

function initializeLibrary() {
    let a = new Book("Divided", "Brian Cornell", 326, "Reading");
    let b = new Book("Thirst: 2600 Miles to Home", "Heather Anderson,", 208, "Read");
    let c = new Book("Free Outside: A Trek Against Time and Distance", "Jeff Garmire", 264, "Read");
    let d = new Book("The Pursuit of Endurance: Harnessing the Record-Breaking Power of Strength and Resilience", "Jennifer Pharr Davis", 320, "Not Read");
    myLibrary.push(a,b,c,d);
    render();
}