import Page from './render';

let titleInp = Page.title;
let authorInp = Page.author;
let pagesInp = Page.pages;

const Validate = (value, list) => {
    // parseInt converts a string number into an integer
    if (isNaN(parseInt(value))){ //checks if user inputted anything but a number
        return true;
    }
    for (let i = 0; i < list.length; i++) {
        for (let j = i + 1; j < list.length; j++) {
            if (list[i].title === list[j].title) {
                return true;
            }
        }
    }

}

export default Validate;