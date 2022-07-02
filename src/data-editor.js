export default library = {
    myLibrary: JSON.parse(localStorage.getItem('myLibrary')) || [], // parse will convert the returned string into an array
    addBook: (bookID, bookTitle, bookAuthor, bookPages, bookStatus) => {
        let newBook = new book(bookID, bookTitle, bookAuthor, bookPages, bookStatus);
        library.myLibrary.push(newBook);
        localStorage.setItem('myLibrary', JSON.stringify(library.myLibrary)); // convert the array into a string
    },
    deleteBook: (target) => {
        let item = library.myLibrary.find(({bookID}) => bookID === parseInt(target.id)); // find method returns first element whose object key bookID matches the buttons id
        let index = library.myLibrary.indexOf(item);
        if (index !== -1){
            library.myLibrary.splice(index, 1);
        }
        localStorage.setItem('myLibrary', JSON.stringify(library.myLibrary)); // push changes to local storage
    },
    changeStatus: (target) => {
        let libraryItem = library.myLibrary[target];
            if (libraryItem.status === 'Unread'){
                libraryItem.status = 'Read';
            } else {
                libraryItem.status = 'Unread';
            }
            localStorage.setItem('myLibrary', JSON.stringify(library.myLibrary)); 
    }
}