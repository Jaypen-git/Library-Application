/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);




const BindEvents = () => {
    _data_editor__WEBPACK_IMPORTED_MODULE_0__["default"].myLibrary.forEach(function(book){
        let keys = Array.from(Object.keys(book));
        let tr = _render__WEBPACK_IMPORTED_MODULE_1__["default"].create_tr();
        for (let i = 1; i < keys.length; i++){
            let val = book[keys[i]];
            if (i === 4){
                let statusButton = _render__WEBPACK_IMPORTED_MODULE_1__["default"].create_statusButton(val);
                statusButton.addEventListener('click', _data_editor__WEBPACK_IMPORTED_MODULE_0__["default"].changeStatus);
                tr.appendChild(statusButton);
            } else {
                let td = _render__WEBPACK_IMPORTED_MODULE_1__["default"].create_td();
                td.innerText = val;
                tr.appendChild(td);
            }
        }
        let deleteButton = _render__WEBPACK_IMPORTED_MODULE_1__["default"].create_deleteButton();
        tr.setAttribute('id', book.bookID);
        tr.appendChild(deleteButton);
        _render__WEBPACK_IMPORTED_MODULE_1__["default"].tbody.appendChild(tr);
        _render__WEBPACK_IMPORTED_MODULE_1__["default"].a++;
    })

    const bindDeleteBtns = (() => {
        let deleteButtonList = document.querySelectorAll('.deleteBtn');
        deleteButtonList.forEach(btn => {
            btn.addEventListener('click', _data_editor__WEBPACK_IMPORTED_MODULE_0__["default"].deleteBook);
            btn.addEventListener('click', _render__WEBPACK_IMPORTED_MODULE_1__["default"].removeBook);
        })
    })();

    _render__WEBPACK_IMPORTED_MODULE_1__["default"].submitButton.addEventListener('click', () => {
        if (_validate__WEBPACK_IMPORTED_MODULE_2__["default"].pages(_render__WEBPACK_IMPORTED_MODULE_1__["default"].pages.value) === true) {
            console.log('an error has occurred');
        } else if (_validate__WEBPACK_IMPORTED_MODULE_2__["default"].title(_data_editor__WEBPACK_IMPORTED_MODULE_0__["default"].myLibrary, _render__WEBPACK_IMPORTED_MODULE_1__["default"].title.value) === true) {
            console.log('an error has occurred');
        }
        else {
            _render__WEBPACK_IMPORTED_MODULE_1__["default"].renderBook(_render__WEBPACK_IMPORTED_MODULE_1__["default"].a, _render__WEBPACK_IMPORTED_MODULE_1__["default"].title.value, _render__WEBPACK_IMPORTED_MODULE_1__["default"].author.value, parseInt(_render__WEBPACK_IMPORTED_MODULE_1__["default"].pages.value), _render__WEBPACK_IMPORTED_MODULE_1__["default"].status.value);
            _data_editor__WEBPACK_IMPORTED_MODULE_0__["default"].addBook(_render__WEBPACK_IMPORTED_MODULE_1__["default"].a, _render__WEBPACK_IMPORTED_MODULE_1__["default"].title.value, _render__WEBPACK_IMPORTED_MODULE_1__["default"].author.value, parseInt(_render__WEBPACK_IMPORTED_MODULE_1__["default"].pages.value), _render__WEBPACK_IMPORTED_MODULE_1__["default"].status.value);
        }
    });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BindEvents);

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


const Library = {
    myLibrary: JSON.parse(localStorage.getItem('myLibrary')) || [], // parse will convert the returned string into an array
    addBook: (bookID, bookTitle, bookAuthor, bookPages, bookStatus) => {
        let newBook = new _constructor__WEBPACK_IMPORTED_MODULE_0__["default"](bookID, bookTitle, bookAuthor, bookPages, bookStatus);
        Library.myLibrary.push(newBook);
        localStorage.setItem('myLibrary', JSON.stringify(Library.myLibrary)); // convert the array into a string
    },
    deleteBook: (e) => {
        let targetNode = e.target;
        let nodeText = targetNode.parentNode.parentNode.firstChild.innerText;
        Library.myLibrary.forEach(item => {
            if (item.title === nodeText) {
                let index = Library.myLibrary.indexOf(item);
                Library.myLibrary.splice(index, 1);
                localStorage.setItem('myLibrary', JSON.stringify(Library.myLibrary));
            } else {
                alert('An error has occurred');
            }
        });
    },
    changeStatus: (e) => {
        let element = e.target;
        let target = parseInt(element.id);
        let libraryItem = Library.myLibrary[target];
            if (libraryItem.status === 'Unread'){
                libraryItem.status = 'Read';
            } else {
                libraryItem.status = 'Unread';
            }
            localStorage.setItem('myLibrary', JSON.stringify(Library.myLibrary)); 
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Library);

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class book {
    constructor(bookID, title, author, pages, status){
        this.bookID = bookID; // this lets me accurately target a book in an array
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (book);

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Validate = {
    pages: (value) => {
        // parseInt converts a string number into an integer
        if (isNaN(parseInt(value))){ //checks if user inputted anything but a number
            return true;
        }
    },
    title: (list, string) => {
        for (let i = 0; i < list.length; i++) {
            if (list[i].title === string) {
                return true;
            }
        }
    },
    isEmpty: (nodes) => {
        nodes.forEach(node => {
            if (node.value === '') {
                return true;
            }
        });
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Validate);

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_binding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


(0,_dom_binding__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;