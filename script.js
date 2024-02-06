const modal = document.querySelector('.modal');
const openModal = document.querySelector('.add-button');

const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookPages = document.querySelector('#pages');
const bookRead = document.querySelector('#read');
const submitBtn = document.querySelector('.submitBtn');

const bookGrid = document.querySelector('.book-grid');

const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    title = bookTitle.value;
    author = bookAuthor.value;
    pages = bookPages.value;
    if (bookRead.checked) {
        read = "Read";
    } else {
        read = "Not read yet";
    }

    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    displayBooks();
}

function displayBooks() {
    for (const object of myLibrary) {
        if (object.displayed !== true) {
            const containerDiv = document.createElement('div');
            containerDiv.classList.add('book-container');
            for (const key in object) {
                const para = document.createElement('p');
                para.textContent = `${object[key]}`;
                containerDiv.appendChild(para);
            }
            bookGrid.appendChild(containerDiv);
            object.displayed = true;
        }
    }
}

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addBookToLibrary();
    modal.close();
})

openModal.addEventListener('click', () => {
    modal.showModal();
})

// Close modal if a click is registered outside of the modal box

modal.addEventListener('click', (e) => {
    const dialogDimensions = modal.getBoundingClientRect()
    if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
    ) {
        modal.close();
    }
})

//Manually added books

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295 pages', 'Not read yet');
const theLastKingdom = new Book('The Last Kingdom', 'Bernard Cornwell', '352 pages', 'Read');
const bladeRunner = new Book('Do Androids Dream of Electric Sheep?', 'Philip K. Dick', '210 pages', 'Not read yet');
const affairAtStyles = new Book('The Mysterious Affair at Styles', 'Agatha Christie', '296 pages', 'Not read yet');

myLibrary.push(theHobbit);
myLibrary.push(theLastKingdom);
myLibrary.push(bladeRunner);
myLibrary.push(affairAtStyles);

displayBooks();