const modal = document.querySelector('.modal');
const openModal = document.querySelector('.add-button');

const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const image = document.querySelector('#image');
const read = document.querySelector('#read');
const submitBtn = document.querySelector('.submitBtn');

let userTitle;
let userAuthor;
let userPages;
let userImage;
let userRead;

let newBook;

const myLibrary = [];

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

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        console.log(this.title + " by " + this.author + ", " + this.pages + ", " + this.read);
    }

}

function addBookToLibrary() {
    userTitle = title.value;
    userAuthor = author.value;
    userPages = pages.value;
    userImage = image.value;
    userRead = read.value;

    newBook = new Book(userTitle, userAuthor, userPages, userImage, userRead);
    myLibrary.push(newBook);
}

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addBookToLibrary();
})



const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295 pages', 'not read yet');

const theLastKingdom = new Book('The Last Kingdom', 'Bernard Cornwell', '352 pages', 'read');

const bladeRunner = new Book('Do Androids Dream of Electric Sheep?', 'Philip K. Dick', '210 pages', 'not read yet');

const affairAtStyles = new Book('The Mysterious Affair at Styles', 'Agatha Christie', '296 pages', 'not read yet');

theHobbit.info();
theLastKingdom.info();
bladeRunner.info();
affairAtStyles.info();
