const myLibrary = JSON.parse(localStorage.getItem('myLibrary')) || []; // parse will convert the returned string into an array 

function book(bookID, title, author, pages, status){
    this.bookID = bookID; // this lets me accurately target a book in an array
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

let a = -1; // id value

const tbody = document.querySelector('tbody');
const displayButton = document.querySelector('#displayButton');
const submitButton = document.querySelector('#submit');

const create_tr = () => {
    let tr = document.createElement('tr');
    return tr;
}
const create_td = () => {
    let td = document.createElement('td');
    return td;
}
const create_deleteButton = () => {
    let deleteButtoncontainer = document.createElement('td');
    let deleteButton = document.createElement('button');
    deleteButton.setAttribute('id', a); // the id corresponds to the books id
    deleteButton.innerText = 'Delete';
    deleteButtoncontainer.appendChild(deleteButton);
    return deleteButtoncontainer;
}
const create_statusButton = (status) => {
    let statusButtoncontainer = document.createElement('td');
    statusButton = document.createElement('button');
    statusButton.setAttribute('id', a);
    statusButton.innerText = status;
    statusButtoncontainer.appendChild(statusButton);
    return statusButtoncontainer;
}

const addBook = (bookID, bookTitle, bookAuthor, bookPages, bookStatus) => {
    bookID = a;
    let keys = [bookID, bookTitle, bookAuthor, bookPages, bookStatus];
    tr = create_tr();
    tr.setAttribute('id', a);
    for (let i = 1; i < keys.length; i++){ // start on key 1 to not print the books id
        let val = keys[i];
        if (i === 4){ // on the 4th item, the status, run this code
            statusButton = create_statusButton(bookStatus);
            statusButton.addEventListener('click', changeStatus);
            tr.appendChild(statusButton);
        } else {
            td = create_td();
            td.innerText = val;
            tr.appendChild(td);
        }
    };
    deleteButton = create_deleteButton();
    deleteButton.addEventListener('click', deleteBook); // if you add parenthesis on function, it will automatically call
    tr.appendChild(deleteButton);
    tbody.appendChild(tr);
    let newBook = new book(bookID, bookTitle, bookAuthor, bookPages, bookStatus);
    myLibrary.push(newBook);
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary)); // convert the array into a string
    a++;
}

const deleteBook = (e) => {
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

const displayForm = () => {
    let form = document.querySelector('.bookForm');
    if (form.style.display === 'none'){
        form.style.display = 'block';
    } else {
        form.style.display = 'none';
    }
}

const changeStatus = (e) => {
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

myLibrary.forEach(function(book){
    a++;
    let keys = Array.from(Object.keys(book));
    tr = create_tr();
    for (let i = 1; i < keys.length; i++){
        let val = book[keys[i]];
        if (i === 4){
            statusButton = create_statusButton(val);
            statusButton.addEventListener('click', changeStatus);
            tr.appendChild(statusButton);
        } else {
            td = create_td();
            td.innerText = val;
            tr.appendChild(td);
        }
    }
    deleteButton = create_deleteButton();
    deleteButton.addEventListener('click', deleteBook);
    tr.setAttribute('id', a);
    tr.appendChild(deleteButton);
    tbody.appendChild(tr);
})

submitButton.addEventListener('click', function(){
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = parseInt(document.querySelector('#pages').value); //parseInt converts a string number into an integer
    let status = document.querySelector('#status').value;
    if (isNaN(pages)){ //checks if user inputted anything but a number
        console.log('uh-oh');
    } else {
        addBook(a, title, author, pages, status);
    }
})