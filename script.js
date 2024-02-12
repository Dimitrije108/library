const modal = document.querySelector('.modal');
const openModal = document.querySelector('.add-button');

const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookPages = document.querySelector('#pages');
const bookRead = document.querySelector('#read');
const submitBtn = document.querySelector('.submitBtn');

const bookGrid = document.querySelector('.book-grid');

const myLibrary = [];
const bookContainers = [];

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'Not read');
const theLastKingdom = new Book('The Last Kingdom', 'Bernard Cornwell', '352', 'Read');
const bladeRunner = new Book('Do Androids Dream of Electric Sheep?', 'Philip K. Dick', '210', 'Not read');
const affairAtStyles = new Book('The Mysterious Affair at Styles', 'Agatha Christie', '296', 'Not read');

myLibrary.push(theHobbit);
myLibrary.push(theLastKingdom);
myLibrary.push(bladeRunner);
myLibrary.push(affairAtStyles);

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    if (bookRead.checked) {
        read = "Read";
    } else {
        read = "Not read";
    };

    let newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value, read);
    myLibrary.push(newBook);
    displayBooks(myLibrary);
}

function createContainer(object) {
    const containerDiv = document.createElement('div');
    const titleHeading = document.createElement('h3');
    const authorPara = document.createElement('p');
    const pagesPara = document.createElement('p');
    const readBtn = document.createElement('button');
    const delBtn = document.createElement('button');

    containerDiv.classList.add('book-container');
    containerDiv.setAttribute('data-array', myLibrary.indexOf(object));
    titleHeading.classList.add('title-heading');
    readBtn.classList.add('read-btn');
    delBtn.classList.add('del-btn');

    titleHeading.textContent = object.title;
    authorPara.textContent = "by " + object.author;
    pagesPara.textContent = "Pages: " + object.pages;
    readBtn.textContent = object.read;
    delBtn.textContent = 'Remove';

    readBtn.textContent === "Read" ? containerDiv.style.borderLeft = "0.8rem solid #36e954" : containerDiv.style.borderLeft = "0.8rem solid #ff4949";

    containerDiv.appendChild(titleHeading);
    containerDiv.appendChild(authorPara);
    containerDiv.appendChild(pagesPara);
    containerDiv.appendChild(readBtn);
    containerDiv.appendChild(delBtn);
    bookGrid.appendChild(containerDiv);
    bookContainers.push(containerDiv);
}

function displayBooks() {
    for (const object of myLibrary) {
        if (object.displayed !== true) {
            createContainer(object);
            object.displayed = true;
        }
    }
}

displayBooks(myLibrary);

const bookContainer = document.querySelector('.book-container');
const readBtn = document.querySelector('.read-btn');

function updateAttribute() {
    for (let i = 0; i < myLibrary.length; i++) {
        bookContainers[i].setAttribute('data-array', i);
    }
};

Book.prototype.toggleReadStatus = function(i) {
    if (myLibrary[i].read === "Read") {
        myLibrary[i].read = "Not read";
        return "Not read";
    } else {
        myLibrary[i].read = "Read";
        return "Read";
    }
}

bookGrid.addEventListener('click', (e) => {
    const clickedBtn = e.target;
    const container = clickedBtn.parentNode;
    if (clickedBtn.classList.contains('del-btn')) {
        if (confirm("Are you sure you want to remove this book from your library?")) {
            for (let i = 0; i < myLibrary.length; i++) {
                if (Number(container.dataset.array) === i) {
                    myLibrary.splice(Number(container.dataset.array), 1);
                    bookContainers.splice(Number(container.dataset.array), 1);
                    container.remove();
                }
            }
        }
        updateAttribute();
    }
    if (clickedBtn.classList.contains('read-btn')) {
        for (let i = 0; i < myLibrary.length; i++) {
            if (Number(container.dataset.array) === i) {
                clickedBtn.textContent = myLibrary[i].toggleReadStatus(i);
                clickedBtn.textContent === "Read" ? container.style.borderLeft = "0.8rem solid #36e954" : container.style.borderLeft = "0.8rem solid #ff4949";
            }
        }
    }
});

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