const Page = {
    a: 0, // for setting IDs
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
        let deleteButtoncontainer = Page.create_td();
        let deleteButton = document.createElement('button');
        deleteButton.setAttribute('id', Page.a); // the id corresponds to the books id
        deleteButton.innerText = 'Delete';
        deleteButtoncontainer.appendChild(deleteButton);
        return deleteButtoncontainer;
    },
    create_statusButton: (status) => {
        let statusButtoncontainer = Page.create_td();
        let statusButton = document.createElement('button');
        statusButton.setAttribute('id', Page.a);
        statusButton.innerText = status;
        statusButtoncontainer.appendChild(statusButton);
        return statusButtoncontainer;
    },
    renderBook: (bookID, bookTitle, bookAuthor, bookPages, bookStatus) => {
        bookID = Page.a;
        let keys = [bookID, bookTitle, bookAuthor, bookPages, bookStatus];
        tr = Page.create_tr();
        tr.setAttribute('id', a);
        for (let i = 1; i < keys.length; i++){ // start on key 1 to not print the books id
            let val = keys[i];
            if (i === 4){ // on the 4th item, the status, run this code
                statusButton = Page.create_statusButton(bookStatus);
                statusButton.addEventListener('click', Library.changeStatus);
                tr.appendChild(statusButton);
            } else {
                td = Page.create_td();
                td.innerText = val;
                tr.appendChild(td);
            }
        };
        deleteButton = Page.create_deleteButton();
        deleteButton.addEventListener('click', Library.deleteBook); // if you add parenthesis on function, it will automatically call
        tr.appendChild(deleteButton);
        Page.tbody.appendChild(tr);
        let newBook = new book(bookID, bookTitle, bookAuthor, bookPages, bookStatus);
        Library.myLibrary.push(newBook);
        localStorage.setItem('myLibrary', JSON.stringify(Library.myLibrary)); // convert the array into a string
    }
}

export default Page;