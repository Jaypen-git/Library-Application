import library from './data-editor';
import page from './render';

export default bindEvents = (() => {
    library.myLibrary.forEach(function(book){
        let keys = Array.from(Object.keys(book));
        tr = page.create_tr();
        for (let i = 1; i < keys.length; i++){
            let val = book[keys[i]];
            if (i === 4){
                statusButton = page.create_statusButton(val);
                statusButton.addEventListener('click', library.changeStatus);
                tr.appendChild(statusButton);
            } else {
                td = page.create_td();
                td.innerText = val;
                tr.appendChild(td);
            }
        }
        deleteButton = page.create_deleteButton();
        deleteButton.addEventListener('click', library.deleteBook);
        tr.setAttribute('id', book.bookID);
        tr.appendChild(deleteButton);
        page.tbody.appendChild(tr);
        a++;
    })

    page.submitButton.addEventListener('click', function(){
        // parseInt converts a string number into an integer
        if (isNaN(page.pages.value)){ //checks if user inputted anything but a number
            console.log('uh-oh');
        } else {
            library.addBook(a, page.title.value, page.author.value, parseInt(page.pages.value), page.status.value);
        }
    })
})();