export default domLibrary = {
    a: 0, // for setting IDs
    page: {
        tbody: document.querySelector('tbody'),
        submitButton: document.querySelector('#submit'),
        title: document.querySelector('#title'),
        author: document.querySelector('#author'),
        pages: document.querySelector('#pages'), //parseInt converts a string number into an integer
        status: document.querySelector('#status'),
        create_tr: () => {
            let tr = document.createElement('tr');
            return tr;
        },
        create_td: () => {
            let td = document.createElement('td');
            return td;
        },
        create_deleteButton: () => {
            let deleteButtoncontainer = page.create_td();
            let deleteButton = document.createElement('button');
            deleteButton.setAttribute('id', a); // the id corresponds to the books id
            deleteButton.innerText = 'Delete';
            deleteButtoncontainer.appendChild(deleteButton);
            return deleteButtoncontainer;
        },
        create_statusButton: (status) => {
            let statusButtoncontainer = page.create_td();
            statusButton = document.createElement('button');
            statusButton.setAttribute('id', a);
            statusButton.innerText = status;
            statusButtoncontainer.appendChild(statusButton);
            return statusButtoncontainer;
        }
    },
    renderBook: (bookID, bookTitle, bookAuthor, bookPages, bookStatus) => {
        bookID = a;
        let keys = [bookID, bookTitle, bookAuthor, bookPages, bookStatus];
        tr = page.create_tr();
        tr.setAttribute('id', a);
        for (let i = 1; i < keys.length; i++){ // start on key 1 to not print the books id
            let val = keys[i];
            if (i === 4){ // on the 4th item, the status, run this code
                statusButton = page.create_statusButton(bookStatus);
                statusButton.addEventListener('click', library.changeStatus);
                tr.appendChild(statusButton);
            } else {
                td = page.create_td();
                td.innerText = val;
                tr.appendChild(td);
            }
        };
        deleteButton = page.create_deleteButton();
        deleteButton.addEventListener('click', library.deleteBook); // if you add parenthesis on function, it will automatically call
        tr.appendChild(deleteButton);
        page.tbody.appendChild(tr);
        let newBook = new book(bookID, bookTitle, bookAuthor, bookPages, bookStatus);
        library.myLibrary.push(newBook);
        localStorage.setItem('myLibrary', JSON.stringify(library.myLibrary)); // convert the array into a string
    }
}