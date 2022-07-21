import Library from './data-editor';
import Page from './render';
import Validate from './validate';

const BindEvents = () => {
    Library.myLibrary.forEach(function(book){
        let keys = Array.from(Object.keys(book));
        let tr = Page.create_tr();
        for (let i = 1; i < keys.length; i++){
            let val = book[keys[i]];
            if (i === 4){
                let statusButton = Page.create_statusButton(val);
                tr.appendChild(statusButton);
            } else {
                let td = Page.create_td();
                td.innerText = val;
                tr.appendChild(td);
            }
        }
        let deleteButton = Page.create_deleteButton();
        tr.setAttribute('id', book.bookID);
        tr.appendChild(deleteButton);
        Page.tbody.appendChild(tr);
        Page.a++;
    })

    const bindDeleteBtns = (() => {
        let deleteButtonList = document.querySelectorAll('.deleteBtn');
        deleteButtonList.forEach(btn => {
            btn.addEventListener('click', Library.deleteBook);
            btn.addEventListener('click', Page.removeBook);
        })
    })();

    const bindStatusBtns = (() => {
        let statButtonList = document.querySelectorAll('.statusBtn');
        statButtonList.forEach(btn => {
            btn.addEventListener('click', Library.changeStatus);
            btn.addEventListener('click', Page.changeStatus);
        })
    })();

    Page.submitButton.addEventListener('click', () => {
        if (Validate.pages(Page.pages.value) === true) {
            console.log('an error has occurred');
        } else if (Validate.title(Library.myLibrary, Page.title.value) === true) {
            console.log('an error has occurred');
        }
        else {
            Page.renderBook(Page.a, Page.title.value, Page.author.value, parseInt(Page.pages.value), Page.status.value);
            Library.addBook(Page.a, Page.title.value, Page.author.value, parseInt(Page.pages.value), Page.status.value);
        }
    });
}

export default BindEvents;