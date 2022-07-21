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
        let target = element.parentNode.parentNode.firstChild.innerText;
        Library.myLibrary.forEach(item => {
            if (item.title === target) {
                if (item.status === 'Read') {
                    item.status = 'Unread';
                } else {
                    item.status = 'Read';
                }
            }
        });
        localStorage.setItem('myLibrary', JSON.stringify(Library.myLibrary));
    }
}

export default Library;