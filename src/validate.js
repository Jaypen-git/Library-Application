import Page from './render';

let titleInp = Page.title;
let authorInp = Page.author;
let pagesInp = Page.pages;

const Validate = () => {
    // parseInt converts a string number into an integer
    if (isNaN(parseInt(Page.pages.value))){ //checks if user inputted anything but a number
        return true;
    }
}

export default Validate;