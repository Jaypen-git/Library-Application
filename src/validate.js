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

export default Validate;