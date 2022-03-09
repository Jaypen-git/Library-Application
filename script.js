// parse turns a returned string into an array
const myLibrary = JSON.parse(localStorage.getItem('myLibrary')) || [];
// variable for setting IDs
let a = 0;
// DOM queries and general functions
const controller = {
    tbody: document.querySelector('tbody'),
    displayButton: document.querySelector('#displayButton'),
    submitButton: document.querySelector('#submit'),
    form: document.querySelector('.bookForm'),
    title: document.querySelector('#title'),
    author: document.querySelector('#author'),
    pages: document.querySelector('#pages'),
    status: document.querySelector('#status'),
    createButton: function(name, num){
        let td = document.createElement('td');
        let button = document.createElement('button');
        button.setAttribute('id', num);
        button.innerText = name;
        td.appendChild(button);
        return td;
    }
}
// book object constructor
class book {
    constructor(bookID, title, author, pages, status){
        this.bookID = bookID;
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status;
    }
    addBook(bookID, bookTitle, bookAuthor, bookPages, bookStatus){
        let newBook = new book(bookID, bookTitle, bookAuthor, bookPages, bookStatus);
        myLibrary.push(newBook);
        localStorage.setItem('myLibrary', JSON.stringify(myLibrary)); // convert the array into a string
        a++;       
    }
    deleteBook(e){
        let target = e.target; // e = event object and target is whichever node had the event
        let item = myLibrary.find(({bookID}) => bookID === parseInt(target.id)); // find method returns first element whose object key bookID matches the buttons id
        let index = myLibrary.indexOf(item);
        if (index !== -1){
            myLibrary.splice(index, 1);
        }
        let buttonContainer = target.parentNode.parentNode; // this will target the tr element. the buttons parent is the td element
        buttonContainer.remove();
        console.log(myLibrary);
        localStorage.setItem('myLibrary', JSON.stringify(myLibrary)); // push changes to local storage
    }
    changeStatus(e){
        let element = e.target;
        let target = parseInt(element.id);
        let libraryItem = myLibrary[target];
        if (libraryItem.status === 'Unread'){
            libraryItem.status = 'Read';
            element.innerText = 'Read';
        } else {
            libraryItem.status = 'Unread';
            element.innerText = 'Unread';
        }
        localStorage.setItem('myLibrary', JSON.stringify(myLibrary)); 
    }
    displayBook(bookID, bookTitle, bookAuthor, bookPages, bookStatus){
        bookID = a;
        let keys = [bookID, bookTitle, bookAuthor, bookPages, bookStatus];
        let tr = document.createElement('tr');
        tr.setAttribute('id', a);
        for (let i = 1; i < keys.length; i++){ // start on key 1 to not print the books id
            let val = keys[i];
            if (i === 4){ // on the 4th item, the status, run this code
                let statusButton = controller.createButton(val, a);
                statusButton.firstChild.addEventListener('click', book.changeStatus);
                tr.appendChild(statusButton);
            } else {
                let td = document.createElement('td');
                td.innerText = val;
                tr.appendChild(td);
            }
        }
        let deleteButton = controller.createButton('Delete', a);
        deleteButton.addEventListener('click', book.deleteBook);
        tr.appendChild(deleteButton);
        controller.tbody.appendChild(tr);
        this.addBook(bookID, bookTitle, bookAuthor, bookPages, bookStatus)
    }
}

myLibrary.forEach(function(book){
    console.log(book);
    let keys = Array.from(Object.keys(book));
    tr = document.createElement('tr');
    for (let i = 1; i < keys.length; i++){
        let val = book[keys[i]];
        if (i === 4){
            let statusButton = controller.createButton(val, a);
            console.log(statusButton.firstChild);
            statusButton.firstChild.addEventListener('click', book.changeStatus);
            tr.appendChild(statusButton);
        } else {
            let td = document.createElement('td');
            td.innerText = val;
            tr.appendChild(td);
        }
    }
    let deleteButton = controller.createButton('Delete', a);
    deleteButton.firstChild.addEventListener('click', book.deleteBook);
    tr.setAttribute('id', a);
    tr.appendChild(deleteButton);
    controller.tbody.appendChild(tr);
    a++;
})

controller.submitButton.addEventListener('click', function(){
    let title = controller.title.value;
    let author = controller.author.value;
    let pages = parseInt(controller.pages.value); //parseInt converts a string number into an integer
    let status = controller.status.value;
    let newBook =  new book(title, author, pages, status);
    if (isNaN(pages)){ //checks if user inputted anything but a number
        console.log('uh-oh');
    } else {
        newBook.addBook(a, title, author, pages, status);
        newBook.displayBook(a, title, author, pages, status);
        a++;
    }
})