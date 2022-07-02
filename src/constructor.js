export default class book {
    constructor(bookID, title, author, pages, status){
        this.bookID = bookID; // this lets me accurately target a book in an array
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status;
    }
}