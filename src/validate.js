import Page from './render';

let formTitle = Page.title;
let formAuthor = Page.author;

const Validate = () => {
    // parseInt converts a string number into an integer
    if (isNaN(parseInt(Page.pages.value))){ //checks if user inputted anything but a number
        return true;
    }
}

export default Validate;