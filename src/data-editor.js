import book from './constructor';

const Library = {
    myLibrary: JSON.parse(localStorage.getItem('myLibrary')) || [], // parse will convert the returned string into an array
    addBook: (bookID, bookTitle, bookAuthor, bookPages, bookStatus) => {
        let newBook = new book(bookID, bookTitle, bookAuthor, bookPages, bookStatus);
        Library.myLibrary.push(newBook);
        localStorage.setItem('myLibrary', JSON.stringify(Library.myLibrary)); // convert the array into a string
    },
    deleteBook: (e) => {
        let targetNode = e.target;
        let nodeText = targetNode.parentNode.parentNode.firstChild.innerText;
        Library.myLibrary.forEach(item => {
            if (item.title === nodeText) {
                let index = Library.myLibrary.indexOf(item);
                Library.myLibrary.splice(index, 1);
                localStorage.setItem('myLibrary', JSON.stringify(Library.myLibrary));
            }
        });
    },
    changeStatus: (e) => {
        let element = e.target;
        let target = parseInt(element.id);
        let libraryItem = Library.myLibrary[target];
            if (libraryItem.status === 'Unread'){
                libraryItem.status = 'Read';
            } else {
                libraryItem.status = 'Unread';
            }
            localStorage.setItem('myLibrary', JSON.stringify(Library.myLibrary)); 
    }
}

export default Library;