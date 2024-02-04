const modal = document.querySelector('.modal');
const openModal = document.querySelector('.add-button');

const myLibrary = [];

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
    
}

openModal.addEventListener('click', () => {
    modal.showModal();
})

// Close modal if a click is registered outside of it

modal.addEventListener('click', e => {
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

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295 pages', 'not read yet');

const theLastKingdom = new Book('The Last Kingdom', 'Bernard Cornwell', '352 pages', 'read');

const bladeRunner = new Book('Do Androids Dream of Electric Sheep?', 'Philip K. Dick', '210 pages', 'not read yet');

const affairAtStyles = new Book('The Mysterious Affair at Styles', 'Agatha Christie', '296 pages', 'not read yet');

theHobbit.info();
theLastKingdom.info();
bladeRunner.info();
affairAtStyles.info();
