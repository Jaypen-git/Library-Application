import BindEvents from "./dom-binding";

BindEvents();

// (function(){
//     class book {
//         constructor(bookID, title, author, pages, status){
//             this.bookID = bookID; // this lets me accurately target a book in an array
//             this.title = title;
//             this.author = author;
//             this.pages = pages;
//             this.status = status;
//         }
//     }

//     const library = {
//         myLibrary:JSON.parse(localStorage.getItem('myLibrary')) || [], // parse will convert the returned string into an array
//         addBook: (bookID, bookTitle, bookAuthor, bookPages, bookStatus) => {
//             bookID = a;
//             let keys = [bookID, bookTitle, bookAuthor, bookPages, bookStatus];
//             tr = page.create_tr();
//             tr.setAttribute('id', a);
//             for (let i = 1; i < keys.length; i++){ // start on key 1 to not print the books id
//                 let val = keys[i];
//                 if (i === 4){ // on the 4th item, the status, run this code
//                     statusButton = page.create_statusButton(bookStatus);
//                     statusButton.addEventListener('click', library.changeStatus);
//                     tr.appendChild(statusButton);
//                 } else {
//                     td = page.create_td();
//                     td.innerText = val;
//                     tr.appendChild(td);
//                 }
//             };
//             deleteButton = page.create_deleteButton();
//             deleteButton.addEventListener('click', library.deleteBook); // if you add parenthesis on function, it will automatically call
//             tr.appendChild(deleteButton);
//             page.tbody.appendChild(tr);
//             let newBook = new book(bookID, bookTitle, bookAuthor, bookPages, bookStatus);
//             library.myLibrary.push(newBook);
//             localStorage.setItem('myLibrary', JSON.stringify(library.myLibrary)); // convert the array into a string
//         },
//         deleteBook: (e) => {
//             let target = e.target; // e = event object and target is whichever node had the event
//             let item = library.myLibrary.find(({bookID}) => bookID === parseInt(target.id)); // find method returns first element whose object key bookID matches the buttons id
//             let index = library.myLibrary.indexOf(item);
//             if (index !== -1){
//                 library.myLibrary.splice(index, 1);
//             }
//             let buttonContainer = target.parentNode.parentNode; // this will target the tr element. the buttons parent is the td element
//             buttonContainer.remove();
//             localStorage.setItem('myLibrary', JSON.stringify(library.myLibrary)); // push changes to local storage
//         },
//         changeStatus: (e) => {
//             let element = e.target;
//             let target = parseInt(element.id);
//             let libraryItem = library.myLibrary[target];
//             if (libraryItem.status === 'Unread'){
//                 libraryItem.status = 'Read';
//                 element.innerText = 'Read';
//             } else {
//                 libraryItem.status = 'Unread';
//                 element.innerText = 'Unread';
//             }
//             localStorage.setItem('myLibrary', JSON.stringify(library.myLibrary)); 
//         }
//     }

//     let a = 0; // id value
//     let page = {
//         tbody: document.querySelector('tbody'),
//         submitButton: document.querySelector('#submit'),
//         title: document.querySelector('#title'),
//         author: document.querySelector('#author'),
//         pages: document.querySelector('#pages'), //parseInt converts a string number into an integer
//         status: document.querySelector('#status'),
//         create_tr: () => {
//             let tr = document.createElement('tr');
//             return tr;
//         },
//         create_td: () => {
//             let td = document.createElement('td');
//             return td;
//         },
//         create_deleteButton: () => {
//             let deleteButtoncontainer = page.create_td();
//             let deleteButton = document.createElement('button');
//             deleteButton.setAttribute('id', a); // the id corresponds to the books id
//             deleteButton.innerText = 'Delete';
//             deleteButtoncontainer.appendChild(deleteButton);
//             return deleteButtoncontainer;
//         },
//         create_statusButton: (status) => {
//             let statusButtoncontainer = page.create_td();
//             statusButton = document.createElement('button');
//             statusButton.setAttribute('id', a);
//             statusButton.innerText = status;
//             statusButtoncontainer.appendChild(statusButton);
//             return statusButtoncontainer;
//         }
//     }

//     library.myLibrary.forEach(function(book){
//         let keys = Array.from(Object.keys(book));
//         tr = page.create_tr();
//         for (let i = 1; i < keys.length; i++){
//             let val = book[keys[i]];
//             if (i === 4){
//                 statusButton = page.create_statusButton(val);
//                 statusButton.addEventListener('click', library.changeStatus);
//                 tr.appendChild(statusButton);
//             } else {
//                 td = page.create_td();
//                 td.innerText = val;
//                 tr.appendChild(td);
//             }
//         }
//         deleteButton = page.create_deleteButton();
//         deleteButton.addEventListener('click', library.deleteBook);
//         tr.setAttribute('id', book.bookID);
//         tr.appendChild(deleteButton);
//         page.tbody.appendChild(tr);
//         a++;
//     })

//     page.submitButton.addEventListener('click', function(){
//         // parseInt converts a string number into an integer
//         if (isNaN(page.pages.value)){ //checks if user inputted anything but a number
//             console.log('uh-oh');
//         } else {
//             library.addBook(a, page.title.value, page.author.value, parseInt(page.pages.value), page.status.value);
//         }
//     })
// })();