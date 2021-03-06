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
        deleteButton.classList.add('deleteBtn');
        deleteButton.innerText = 'Delete';
        deleteButtoncontainer.appendChild(deleteButton);
        return deleteButtoncontainer;
    },
    create_statusButton: (status) => {
        let statusButtoncontainer = Page.create_td();
        let statusButton = document.createElement('button');
        statusButton.classList.add('statusBtn');
        statusButton.setAttribute('id', Page.a);
        statusButton.innerText = status;
        statusButtoncontainer.appendChild(statusButton);
        return statusButtoncontainer;
    },
    renderBook: (bookID, bookTitle, bookAuthor, bookPages, bookStatus) => {
        bookID = Page.a;
        let keys = [bookID, bookTitle, bookAuthor, bookPages, bookStatus];
        let tr = Page.create_tr();
        tr.setAttribute('id', Page.a);
        for (let i = 1; i < keys.length; i++){ // start on key 1 to not print the books id
            let val = keys[i];
            if (i === 4){ // on the 4th item, the status, run this code
                let statusButton = Page.create_statusButton(bookStatus);
                // statusButton.addEventListener('click', Library.changeStatus);
                tr.appendChild(statusButton);
            } else {
                let td = Page.create_td();
                td.innerText = val;
                tr.appendChild(td);
            }
        };
        let deleteButton = Page.create_deleteButton();
        // deleteButton.addEventListener('click', Library.deleteBook); // if you add parenthesis on function, it will automatically call
        tr.appendChild(deleteButton);
        Page.tbody.appendChild(tr);
        Page.a++;
    },
    removeBook: (e) => {
        let target = e.target;
        let row = target.parentNode.parentNode; // the table row is two steps up
        row.remove();
    },
    changeStatus: (e) => {
        let target = e.target;
        if (target.innerText === 'Read') {
            target.innerText = 'Unread';
        } else {
            target.innerText = 'Read';
        }
    }
}

export default Page;