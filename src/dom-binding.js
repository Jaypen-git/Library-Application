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
                statusButton.addEventListener('click', Library.changeStatus);
                tr.appendChild(statusButton);
            } else {
                let td = Page.create_td();
                td.innerText = val;
                tr.appendChild(td);
            }
        }
        let deleteButton = Page.create_deleteButton();
        deleteButton.addEventListener('click', Library.deleteBook);
        tr.setAttribute('id', book.bookID);
        tr.appendChild(deleteButton);
        Page.tbody.appendChild(tr);
        Page.a++;
    })
    let deleteButtonList = document.querySelectorAll('.deleteBtn');
    deleteButtonList.forEach(btn => {
        btn.addEventListener('click', Library.deleteBook(btn.id));
    })
    Page.submitButton.addEventListener('click', () => {
        if (Validate === true) {
            console.log('an error has occurred');
        } else {
            Page.renderBook(Page.a, Page.title.value, Page.author.value, parseInt(Page.pages.value), Page.status.value)
            Library.addBook(Page.a, Page.title.value, Page.author.value, parseInt(Page.pages.value), Page.status.value);
        }

    });
};

export default BindEvents;