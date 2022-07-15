const Library = {
    myLibrary: JSON.parse(localStorage.getItem('myLibrary')) || new Set(), // parse will convert the returned string into an array
    addBook: (bookID, bookTitle, bookAuthor, bookPages, bookStatus) => {
        let newBook = new book(bookID, bookTitle, bookAuthor, bookPages, bookStatus);
        this.myLibrary.push(newBook);
        localStorage.setItem('myLibrary', JSON.stringify(this.myLibrary)); // convert the array into a string
    },
    deleteBook: (target) => {
        let item = this.myLibrary.find(({bookID}) => bookID === parseInt(target.id)); // find method returns first element whose object key bookID matches the buttons id
        let index = this.myLibrary.indexOf(item);
        if (index !== -1){
            this.myLibrary.splice(index, 1);
        }
        localStorage.setItem('myLibrary', JSON.stringify(this.myLibrary)); // push changes to local storage
    },
    changeStatus: (target) => {
        let libraryItem = this.myLibrary[target];
            if (libraryItem.status === 'Unread'){
                libraryItem.status = 'Read';
            } else {
                libraryItem.status = 'Unread';
            }
            localStorage.setItem('myLibrary', JSON.stringify(this.myLibrary)); 
    }
}

export default Library;